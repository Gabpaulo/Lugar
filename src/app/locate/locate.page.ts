import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.page.html',
  styleUrls: ['./locate.page.scss'],
})
export class LocatePage implements AfterViewInit {
  map!: google.maps.Map;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  destination: string = ''; // Destination entered by the user

  constructor() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  // Initialize the map
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

          const mapOptions: google.maps.MapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
          };

          // Initialize the map
          this.map = new google.maps.Map(mapElement, mapOptions);
          this.directionsRenderer.setMap(this.map);
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

  // Calculate and display the route
  calculateRoute() {
    if (!this.destination) {
      console.error('Destination is required');
      return;
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const origin = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const request: google.maps.DirectionsRequest = {
            origin,
            destination: this.destination,
            travelMode: google.maps.TravelMode.DRIVING,
          };

          this.directionsService.route(request, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.directionsRenderer.setDirections(response);
            } else {
              console.error('Directions request failed: ', status);
            }
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
