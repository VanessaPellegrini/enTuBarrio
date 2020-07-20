import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {HistoricalRoutingModule } from './historical-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HistoricalRoutingModule.components],
  imports: [
    CommonModule,
    HistoricalRoutingModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class HistoricalModule { }
