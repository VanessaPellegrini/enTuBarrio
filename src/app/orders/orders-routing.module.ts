import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';


const routes: Routes = [
  {
    path: '',component: OrdersComponent
      //{ path: '',   redirectTo: '/ordenes', pathMatch: 'full' },
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [OrdersComponent];
}
