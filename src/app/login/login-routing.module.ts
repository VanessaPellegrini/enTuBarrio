import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegistryComponent } from './registry/registry.component';


const routes: Routes = [
  {
    path: '', children: [{
      path: '', component: LoginComponent
    },
    { path: 'registro', component: RegistryComponent }
    ]
  }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
  static components = [LoginComponent];
}
