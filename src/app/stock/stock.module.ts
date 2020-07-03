import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StockRoutingModule } from './stock-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StockRoutingModule.components,
    ProductDetailComponent,
    ProductListComponent,
    ProductCreateComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class StockModule { }
