import { Component, ViewChild, ChangeDetectorRef, AfterViewChecked, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderService } from '../services/order.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HistoricalService } from '../services/historical.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements AfterViewChecked, OnInit {

  orders: any;
  formGroup: FormGroup;
  pedidoAceptado: boolean;

  constructor(
    private _orderService: OrderService,
    private _historical: HistoricalService,
    public dialog: MatDialog,) {
  }

  ngAfterViewChecked() {
  }

  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this._orderService.getOrderList().snapshotChanges().pipe(
      map(changes =>
        changes.map(
          c => ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        ))
    ).subscribe(orders => {
      this.orders = orders;
    })
  }

  deleteProduct() {
    this._orderService.deleteOrder(this.orders[0].key)
    .then(()=>{
      this.openDialog('eliminar');
    })
      .catch(err => console.log(err));
  }

  aceptado() {
    this.pedidoAceptado = true;
  }

  enviado() {
    let statusSended = {estado:'ENTREGADO'}
    let newHistoricalOrder = Object.assign({...statusSended,...this.orders[0]})

    this._historical.createOrder(newHistoricalOrder)
      .then(() => {
        this.openDialog('enviado');
      })
      .then(() => {
        this._orderService.deleteOrder(this.orders[0].key)
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  openDialog(type: string) {
    let dataModal;

    switch (type) {
      case 'enviado':
        dataModal = { title: "Pedido Enviado!", message: "Podrás encontrar la información de tu pedido en el historial", icon: 'local_shipping', colorIcon: 'primary' }
        break;
      case 'eliminar':
        dataModal = { title: "El pedido ha sido eliminado", message: "No podrás volver atrás esta acción", icon: 'delete_sweep', colorIcon: 'warn' }
        break;

      default:
        break;
    }

    this.dialog.open(ModalComponent, {
      width: '250px',
      data: dataModal
    });
  }

}


