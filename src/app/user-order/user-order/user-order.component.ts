import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {

  products$: Observable <Product[]>;
  cartData = [];

  constructor( private cartService: CartService) {
    this.products$ = this.cartService.cart$;
   }

  ngOnInit(): void {
    this.products$.subscribe(data =>{
      console.log(data)
      this.cartData = data;
    });
    
  }

  deleteProduct(product:Product){
    this.cartService.deleteCart(product)
  }

}
