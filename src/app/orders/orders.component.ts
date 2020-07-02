import { Component, ViewChild, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Pedido {
  id?: number;
  cant_items?: number;
  estado_pedido?: string;
  fecha?: Date;
  nombre_cliente?: string;
  telefono_cliente?: string;
  total?: number;
  aceptacion?:string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements AfterViewChecked {
  displayedColumns: string[] = [
    'id', 
    'fecha', 
    'nombre_cliente', 
    'cant_items', 
    'total',
    'aceptacion',
    'estado_pedido'
  ];
  dataSource: MatTableDataSource<Pedido>;
  orderStatus = 'ACEPTADO';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private firestore: AngularFirestore,
    private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.firestore.collection<any>('pedidos', ref => ref 
    .where('estado_pedido','==', 'NO ENTREGADO')
    ).valueChanges().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
    this.cdRef.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


