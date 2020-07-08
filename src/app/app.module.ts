import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { LoginModule } from './login/login.module';

//firebase

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LoaderService } from './shared/loader/loader.service';
import { SharedModule } from './shared/shared.module';

//loader


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    SharedModule
  ],
  providers:[
    LoaderService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
