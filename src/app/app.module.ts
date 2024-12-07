import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { SearchModalComponent } from './components/search-modal/search-modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
@NgModule({
  declarations: [AppComponent, LoginModalComponent,HistoryDetailComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
