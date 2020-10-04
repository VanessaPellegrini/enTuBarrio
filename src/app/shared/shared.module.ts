import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { GroupProductsPipe } from './pipe/group.pipe';



@NgModule({
  declarations: [
    ModalComponent,
    HeaderComponent, 
    LoaderComponent, 
    UserHeaderComponent, 
    FooterComponent,
    GroupProductsPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  entryComponents: [ModalComponent, ],
  exports: [
    ModalComponent,
    HeaderComponent, 
    LoaderComponent,
    UserHeaderComponent,
    FooterComponent,
    GroupProductsPipe
  ],
})
export class SharedModule { }
