import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {
  private dbPath = '/historial';
  ordersRef: AngularFirestoreCollection<Order> = null;

  constructor(private db: AngularFirestore) {
    this.ordersRef = db.collection(this.dbPath);
  }
  
  createOrder(order: Order){
    return this.db.collection(this.dbPath).add(order);
  }

  getOrderList(): AngularFirestoreCollection<Order> {
    return this.ordersRef;
  }
}
