import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { DisplaymapPageRoutingModule } from './displaymap-routing.module';

import { DisplaymapPage } from './displaymap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaymapPageRoutingModule,
    SharedModule
  ],
  declarations: [DisplaymapPage]
})
export class DisplaymapPageModule {}
