import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOrderRoutingModule } from './user-order-routing.module';
import {UserOrderComponent} from './user-order/user-order.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserOrderComponent],
  imports: [
    CommonModule,
    UserOrderRoutingModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserOrderModule { }
