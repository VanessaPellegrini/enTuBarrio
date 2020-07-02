import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserRoutingModule.components],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class UserModule { }
