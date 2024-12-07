import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-displaymap',
  templateUrl: './displaymap.page.html',
  styleUrls: ['./displaymap.page.scss'],
})
export class DisplaymapPage implements AfterViewInit {
  map!: google.maps.Map;

  constructor() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map element not found');
      return;
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Define map options with the custom Map Style ID
          const mapOptions: google.maps.MapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
            mapId: '3cbd50b21827004b', // Replace with your actual Map Style ID
          };

          // Initialize the Google Map
          this.map = new google.maps.Map(mapElement, mapOptions);

          // Add a marker at the user's location
          new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: this.map,
            title: 'You are here!',
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
