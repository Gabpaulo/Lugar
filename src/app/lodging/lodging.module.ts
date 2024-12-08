import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingPageRoutingModule } from './lodging-routing.module';
import { SharedModule } from '../shared/shared.module'; 

import { LodgingPage } from './lodging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingPageRoutingModule,SharedModule
  ],
  declarations: [LodgingPage]
})
export class LodgingPageModule {}
