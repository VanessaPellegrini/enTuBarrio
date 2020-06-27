import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', loadChildren: 'src/app/login/login.module#LoginModule' },
  { path: 'dashboard',
   loadChildren: ()=> import(`src/app/dashboard/dashboard.module`).then(m=>m.DashboardModule),
   canActivate: [AngularFireAuthGuard]},
  { path: 'stock', loadChildren: 'src/app/stock/stock.module#StockModule'},
  { path: 'ordenes', loadChildren: 'src/app/orders/orders.module#OrdersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
