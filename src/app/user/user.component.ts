import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../model/product.model';
import { map } from 'rxjs/operators';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

//TODO arreglar item carrito


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  products: any;
  userName: any;

  //@Output() productClicked: EventEmitter;

  cantidad : FormGroup = new FormGroup({
    itemCantidad: new FormControl('', [Validators.required])
  });

  constructor(
    private _router: Router,
    public auth: AngularFireAuth,
    private productService:ProductService,
    private cartService: CartService
  ) {
    this.userName = localStorage.getItem('nombre');
    console.log(this.userName);

  }

  ngOnInit(): void {
    this.getProductList();
    console.log(this.products);

  }

  onSubmit(){

  }

  getProductList() {
    this.productService.getProductList().snapshotChanges().pipe(
      map(changes =>
        changes.map(
          c => ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        ))
    ).subscribe(product => {
      this.products = product;
    })
  }

  addCart(){
    console.log('agregar al carrito');
    this.cartService.addCart(this.products)
    //this.productClicked.emit(this.products.id);
  }


}
