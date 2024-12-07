import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeepneyRoutesPage } from './jeepney-routes.page';

const routes: Routes = [
  {
    path: '',
    component: JeepneyRoutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeepneyRoutesPageRoutingModule {}
