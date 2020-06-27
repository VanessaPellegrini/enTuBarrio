import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponentComponent } from './orders-component/orders-component.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';



const routes: Routes = [
  {
    path: '', children: [{
      path: '', component: OrdersComponentComponent
    },
    { path: 'detalle', component: OrdersDetailsComponent }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  static components = [OrdersComponentComponent];
}
