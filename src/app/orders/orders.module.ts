import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponentComponent } from './orders-component/orders-component.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    OrdersRoutingModule.components,
    OrdersComponentComponent, 
    OrdersDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
