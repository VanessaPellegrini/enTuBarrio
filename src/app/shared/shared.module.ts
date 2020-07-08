import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [ModalComponent,
  HeaderComponent, LoaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [ModalComponent, ],
  exports: [ModalComponent,
    HeaderComponent, LoaderComponent],
})
export class SharedModule { }
