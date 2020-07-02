import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import {environment} from "../../environments/environment";
import { SharedModule } from '../shared/shared.module';
import { RegistryComponent } from './registry/registry.component';

if (!firebase.apps.length) {
  firebase.initializeApp(environment.firebase);
}

@NgModule({
  declarations: [
    LoginRoutingModule.components,
    RegistryComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
