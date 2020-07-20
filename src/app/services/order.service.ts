import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../model/order.mode';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private dbPath = '/pedidos';
  ordersRef: AngularFirestoreCollection<Order> = null;

  constructor(private db: AngularFirestore) {
    this.ordersRef = db.collection(this.dbPath);
  }
  createOrder(order: Order){
    return this.db.collection(this.dbPath).add(order);
  }
  updateOrder(key: string, value: any): Promise<void> {
    return this.ordersRef.doc(key).update(value)
  }

  deleteOrder(key: string): Promise<void> {
    return this.ordersRef.doc(key).delete();
  }

  getOrderList(): AngularFirestoreCollection<Order> {
    return this.ordersRef;
  }
}