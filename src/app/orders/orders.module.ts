import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrdersRoutingModule.components],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class OrdersModule { }
