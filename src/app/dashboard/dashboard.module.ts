import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { OrdersComponent } from './orders/orders.component';
import { StockComponent } from './stock/stock.component';



@NgModule({
  declarations: [
    DashboardRoutingModule.components,
    DashboardComponent,
    OrdersComponent,
    StockComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class DashboardModule { }
