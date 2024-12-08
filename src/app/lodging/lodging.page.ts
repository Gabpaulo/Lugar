import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.page.html',
  styleUrls: ['./lodging.page.scss'],
})
export class LodgingPage implements AfterViewInit {
  map!: google.maps.Map;
  placesService!: google.maps.places.PlacesService;
  currentLocation!: google.maps.LatLng;
  places: google.maps.places.PlaceResult[] = []; // Stores nearby places

  constructor() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  // Load the map and initialize the PlacesService
  loadMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map element not found.');
      return;
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Set user's current location
          this.currentLocation = new google.maps.LatLng(latitude, longitude);

          // Map options
          const mapOptions: google.maps.MapOptions = {
            center: this.currentLocation,
            zoom: 15,
          };

          // Initialize the map
          this.map = new google.maps.Map(mapElement, mapOptions);

          // Add a basic marker for the user's location (fallback for AdvancedMarkerElement)
          new google.maps.Marker({
            position: this.currentLocation,
            map: this.map,
            title: 'You are here!',
          });

          // Initialize the PlacesService
          this.placesService = new google.maps.places.PlacesService(this.map);

          // Search for nearby lodgings
          this.findNearbyLodgings();
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

  // Find nearby lodgings using the Places API
  findNearbyLodgings() {
    if (!this.currentLocation) {
      console.error('Current location is not set.');
      return;
    }

    const request: google.maps.places.PlaceSearchRequest = {
      location: this.currentLocation,
      radius: 2000, // 2km radius
      type: 'lodging', // Type of place to search
    };

    this.placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        this.places = results;

        // Add markers for each place
        results.forEach((place) => {
          if (place.geometry?.location) {
            new google.maps.Marker({
              position: place.geometry.location,
              map: this.map,
              title: place.name,
              icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Custom icon for hotels
              },
            });
          }
        });
      } else {
        console.error('Places search failed:', status);
      }
    });
  }
}
