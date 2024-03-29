import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';


const routes: Routes = [
  {
    path: '',component: StockComponent
      //{ path: '',   redirectTo: '/ordenes', pathMatch: 'full' },
  },
  {path: 'listado', component: ProductListComponent},
  {path: 'agregar', component: ProductCreateComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
  static components = [StockComponent];
}
