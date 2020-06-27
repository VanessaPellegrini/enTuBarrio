import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponentComponent } from './stock-component/stock-component.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';
import { StockRoutingModule } from './stock-routing.module';



@NgModule({
  declarations: [
    StockRoutingModule.components,
    StockComponentComponent, 
    DetailStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
