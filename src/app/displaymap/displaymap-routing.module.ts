import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplaymapPage } from './displaymap.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaymapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplaymapPageRoutingModule {}
