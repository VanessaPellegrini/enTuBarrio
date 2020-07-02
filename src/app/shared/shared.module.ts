import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ModalComponent,
  HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [ModalComponent, ],
  exports: [ModalComponent,
    HeaderComponent],
})
export class SharedModule { }
