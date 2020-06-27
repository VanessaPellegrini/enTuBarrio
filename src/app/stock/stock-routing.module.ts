import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponentComponent } from './stock-component/stock-component.component';
import { DetailStockComponent } from './detail-stock/detail-stock.component';


const routes: Routes = [
  {
    path: '', children: [{
      path: '', component: StockComponentComponent
    },
    { path: 'detalle', component: DetailStockComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
  static components = [StockComponentComponent];
}
