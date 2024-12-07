import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'displaymap',
    loadChildren: () => import('./displaymap/displaymap.module').then( m => m.DisplaymapPageModule)
  },
  {
    path: 'locate',
    loadChildren: () => import('./locate/locate.module').then( m => m.LocatePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
 
  {
    path: 'jeepney-routes',
    loadChildren: () => import('./jeepney-routes/jeepney-routes.module').then( m => m.JeepneyRoutesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
