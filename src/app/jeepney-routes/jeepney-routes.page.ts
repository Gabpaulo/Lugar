import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchModalComponent } from '../components/search-modal/search-modal.component';

@Component({
  selector: 'app-jeepney-routes',
  templateUrl: './jeepney-routes.page.html',
  styleUrls: ['./jeepney-routes.page.scss'],
})
export class JeepneyRoutesPage {
  jeepneyRoutes = [
    { code: '04L', origin: 'Lahug', destination: 'Carbon Market' },
    { code: '12G', origin: 'Guadalupe', destination: 'SM City Cebu' },
    // Add more routes as needed
  ];

  constructor(private modalController: ModalController) {}

  async openSearchModal(route: any) {
    const modal = await this.modalController.create({
      component: SearchModalComponent,
      componentProps: { route },
    });
    return await modal.present();
  }
}
