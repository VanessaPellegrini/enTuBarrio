import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ModalComponent],
  exports: [ModalComponent]
})
export class SharedModule { }
