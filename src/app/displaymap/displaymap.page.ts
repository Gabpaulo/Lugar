import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-displaymap',
  templateUrl: './displaymap.page.html',
  styleUrls: ['./displaymap.page.scss'],
})
export class DisplaymapPage implements AfterViewInit {
  map!: google.maps.Map;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  geocoder = new google.maps.Geocoder();
  currentLocation!: google.maps.LatLng;
  destination: string = '';

  constructor() {}

  ngAfterViewInit() {
    this.loadMap();

    // Initialize Google Places Autocomplete
    const autocompleteInput = document.getElementById('autocomplete') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);

    // Listen for place selection and set the destination
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry?.location) {
        this.destination = place.formatted_address || '';
      } else {
        console.error('Invalid destination selected.');
      }
    });
  }

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

          this.currentLocation = new google.maps.LatLng(latitude, longitude);

          const mapOptions: google.maps.MapOptions = {
            center: this.currentLocation,
            zoom: 15,
          };

          this.map = new google.maps.Map(mapElement, mapOptions);
          this.directionsRenderer.setMap(this.map);

          new google.maps.Marker({
            position: this.currentLocation,
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

  calculateRoute() {
    if (!this.destination) {
      console.error('Please enter a valid destination.');
      return;
    }

    if (!this.currentLocation) {
      console.error('Current location is not set.');
      return;
    }

    // Geocode the destination to get coordinates
    this.geocoder.geocode({ address: this.destination }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]?.geometry?.location) {
        const destinationLatLng = results[0].geometry.location;

        // Create DirectionsRequest
        const request: google.maps.DirectionsRequest = {
          origin: this.currentLocation,
          destination: destinationLatLng,
          travelMode: google.maps.TravelMode.DRIVING,
        };

        // Call the DirectionsService
        this.directionsService.route(request, (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionsRenderer.setDirections(response);
          } else {
            console.error('Directions request failed:', status);
            this.handleDirectionError(status);
          }
        });
      } else if (!results || results.length === 0) {
        console.error('No results found for the destination.');
        alert('No results found for the destination. Please try a different address.');
      } else {
        console.error('Geocoding failed:', status);
        alert('Geocoding failed. Please ensure the destination is valid.');
      }
    });
  }

  handleDirectionError(status: string) {
    switch (status) {
      case 'NOT_FOUND':
        alert('One or more locations could not be found.');
        break;
      case 'ZERO_RESULTS':
        alert('No route could be found between your location and the destination.');
        break;
      case 'INVALID_REQUEST':
        alert('Invalid request. Please check the input.');
        break;
      case 'OVER_QUERY_LIMIT':
        alert('API quota exceeded. Try again later.');
        break;
      case 'REQUEST_DENIED':
        alert('Request denied. Check your API key permissions.');
        break;
      case 'UNKNOWN_ERROR':
        alert('An unknown error occurred. Please try again.');
        break;
      default:
        alert('An unexpected error occurred.');
    }
  }
}
