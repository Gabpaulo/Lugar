import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';
import { SharedModule } from '../shared/shared.module'; 
import { HistoryPage } from './history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
