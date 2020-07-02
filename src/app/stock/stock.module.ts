import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StockRoutingModule } from './stock-routing.module';



@NgModule({
  declarations: [
    StockRoutingModule.components],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StockModule { }
