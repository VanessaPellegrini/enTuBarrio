import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { MaterialElevationDirective } from '../shared/directives/material-elevation.directive';



@NgModule({
  declarations: [
    UserRoutingModule.components,
    ProductComponent,
    ProductsComponent,
    MaterialElevationDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
