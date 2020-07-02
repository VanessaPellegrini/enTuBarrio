import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { StockComponent } from './stock/stock.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: DashboardComponent },
      { path: 'ordenes', component: OrdersComponent },
      { path: 'stock', component: StockComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  static components = [DashboardComponent];
}
