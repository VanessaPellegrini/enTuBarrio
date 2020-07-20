import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserOrderComponent } from './user-order/user-order.component';


const routes: Routes = [
  {
    path: '',
    component: UserOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserOrderRoutingModule { }
