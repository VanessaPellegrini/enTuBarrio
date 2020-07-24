import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cartAdd = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartAdd.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    //cambio de datos que cualquier componente puede preguntar
    this.cartAdd.next(this.products);
    //console.log(this.products);
  }

  deleteCart(product: Product) {
    const i = this.products.indexOf(product);
    this.products.splice(i,1);
    this.cartAdd.next(this.products);
  }

  resetCart(){
    let resetProduct= [];
    this.cartAdd.next(resetProduct);
  }

}
