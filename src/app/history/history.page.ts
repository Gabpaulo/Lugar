
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HistoryDetailComponent } from '../history-detail/history-detail.component';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  historyItems = [
    {
      title: 'Trip to Ayala Center Cebu',
      fare: '₱15',
      travelTime: '30 minutes',
      jeepneyInfo: {
        route: '04L',
        plateNumber: 'ABC 1234',
        type: 'Modern Jeepney'
      },
      driver: {
        name: 'Juan Dela Cruz',
        contact: '0917-123-4567'
      }
    },
    {
      title: 'Trip to SM City Cebu',
      fare: '₱12',
      travelTime: '25 minutes',
      jeepneyInfo: {
        route: '12G',
        plateNumber: 'XYZ 5678',
        type: 'Traditional Jeepney'
      },
      driver: {
        name: 'Pedro Santos',
        contact: '0918-234-5678'
      }
    },
    {
      title: 'Trip to IT Park',
      fare: '₱14',
      travelTime: '20 minutes',
      jeepneyInfo: {
        route: '17B',
        plateNumber: 'LMN 9101',
        type: 'Modern Jeepney'
      },
      driver: {
        name: 'Maria Lopez',
        contact: '0919-345-6789'
      }
    }
    // Add more items as needed
  ];

  constructor(private modalController: ModalController) {}

  async openDetailModal(item: any) {
    const modal = await this.modalController.create({
      component: HistoryDetailComponent,
      componentProps: { item },
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
