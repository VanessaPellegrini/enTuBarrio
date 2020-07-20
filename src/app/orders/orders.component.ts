import { Component, ViewChild, ChangeDetectorRef, AfterViewChecked, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../model/order.mode';
import { OrderService } from '../services/order.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements AfterViewChecked, OnInit {
  displayedColumns: string[] = [
    'fecha',
    'nombre_cliente',
    'cant_items',
    'total',
    'aceptacion',
    'estado_pedido'
  ];
  dataSource: MatTableDataSource<Order>;
  orderStatus = 'ACEPTADO';
  orders;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private firestore: AngularFirestore,
    private cdRef: ChangeDetectorRef,
    private orderService: OrderService
  ) { }

  ngAfterViewChecked() {
    this.firestore.collection<any>('pedidos', ref => ref
      .where('estado_pedido', '==', 'NO ENTREGADO')
    ).valueChanges().subscribe(
      orderData => {
        this.dataSource = new MatTableDataSource(orderData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.getOrderList();
    console.log(this.orders);

  }

  getOrderList() {
    this.orderService.getOrderList().snapshotChanges().pipe(
      map(changes =>
        changes.map(
          c => ({
            key: c.payload.doc.id,
            ...c.payload.doc.data()
          })
        )
      )
    ).subscribe(
      order => {
        this.orders = order;
      }
    )
  }

  deleteOrder() {
    //this.orderService.deleteOrder()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


