import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', loadChildren: 'src/app/login/login.module#LoginModule' },
  {
    path: 'pedidos',
    loadChildren: () => import(`src/app/orders/orders.module`).then(m => m.OrdersModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'historial',
    loadChildren: () => import(`src/app/historical/historical.module`).then(m => m.HistoricalModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'usuario',
    loadChildren: () => import(`src/app/user/user.module`).then(m => m.UserModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'orden',
    loadChildren: () => import(`src/app/user-order/user-order.module`).then(m => m.UserOrderModule)
  },
  {
    path: 'productos',
    loadChildren: () => import(`src/app/stock/stock.module`).then(m => m.StockModule),
    canActivate: [AngularFireAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
