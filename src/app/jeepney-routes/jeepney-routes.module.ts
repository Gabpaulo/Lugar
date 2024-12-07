import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeepneyRoutesPageRoutingModule } from './jeepney-routes-routing.module';

import { JeepneyRoutesPage } from './jeepney-routes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeepneyRoutesPageRoutingModule
  ],
  declarations: [JeepneyRoutesPage]
})
export class JeepneyRoutesPageModule {}
