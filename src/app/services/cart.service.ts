import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Totals {
  subTot: number;
  tax: number;
  grandTot: number;
}

export interface CartItem {
  price: number;
  image: string;
  name: string;
  details: string;
  heart: boolean;
  uuid?: any;
  remove?: boolean;
}


export interface StateTree {
  store: CartItem[];
  cart: CartItem[];
  tot: Totals,
  checkout: boolean;
};


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  //private cartRemove$ = new Subject<Product>();
  //private itemDelete = new BehaviorSubject<Product[]>([]);

  private stateTree$ = new BehaviorSubject<StateTree>(null);
  private checkoutTrigger$ = new BehaviorSubject<boolean>(false);
  private cartAdd$ = new Subject<CartItem>();
  private cartRemove$ = new Subject<CartItem>();

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    //cambio de datos que cualquier componente puede preguntar
    this.cart.next(this.products);
    //console.log(this.products);
  }

  deleteCart(product: Product) {
    /*** Elimina *** 
    const i = this.products.indexOf(product)
    let newStatusDeleted = this.products.splice(i,1)*/
    const i = this.products.indexOf(product);
    //this.products = this.products.splice(i,1);
    this.products.splice(i,1)
    //this.cart.next();
    console.log(this.products);
  }

}
