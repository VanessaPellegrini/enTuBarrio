import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/model/order.model';
import * as firebase from 'firebase/app';
import { OrderService } from 'src/app/services/order.service';
import { Users } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit, AfterViewChecked {

  products$: Observable<Product[]>;
  cartData = [];

  total: number = 0;
  cantidad: number = 0;
  userData: Users[] = [];
  emailUser;
  sendedOrder: boolean = false;

  /** user data* */
  userName;
  userPhone;
  userAdress;

  userDataOrder: FormGroup = new FormGroup({
    tipo: new FormControl('', Validators.required),
    nombreNegocio: new FormControl(''),
    nombre: new FormControl(''),
    numero: new FormControl(''),
    direccion: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\\.[a-zA-Z]{2,4}$')])
  });

  constructor(private cartService: CartService,
    private ref: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _order: OrderService
  ) {
    this.emailUser = localStorage.getItem('email');
  }

  ngOnInit(): void {
    this.products$ = this.cartService.cart$;
    this.ref.detectChanges();
    this.getUserData();
    this.products$.subscribe(data => {
      //console.log(data)
      this.cartData = data;
    });
  }

  ngAfterViewChecked() {
  }

  deleteProduct(product: Product) {
    this.cartService.deleteCart(product);
  }

  getUserData() {
    this._userService.getDataUser().snapshotChanges().pipe(
      map(changes =>
        changes.map(
          c => ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        ))
    ).subscribe(user => {
      this.userData = user;
      this.userData.forEach(user => {
        this.userName = user.nombre;
        this.userAdress = user.direccion;
        this.userPhone = user.numero;
      })
    })
  }

  orderConfirmation() {
    let orderItem: number = 0;
    let orderTotal: number = 0;
    this.cartData.forEach(dataItemCart => {
      orderItem += dataItemCart.cantidad;
      orderTotal += dataItemCart.precio;
    })
    let order: Order;
    order = Object.assign({}, {
      cant_items: orderItem,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
      nombre_cliente: this.userName,
      telefono_cliente: this.userPhone,
      direccion_cliente: this.userAdress,
      total: orderTotal,
    })
    this._order.createOrder(order)
      .then(() => {
        this.cartService.resetCart();
      })
      .then(() => {
        this.sendedOrder = true;
        //TODO resetear carrito
      }) 
    
      .catch((err) => {
        throw err
      });
  }

  sumarTotal() {
    let arr = [];
    let precio = 0;
    let cantidad = 0;
    this.total = 0;
    this.cantidad = 0;
    this.products$.subscribe(data => {
      arr = data;
      arr.forEach(el => {
        precio += el.precio;
        cantidad += el.cantidad;
      })
      this.total = precio;
      this.cantidad = cantidad;
    });
  }

}
