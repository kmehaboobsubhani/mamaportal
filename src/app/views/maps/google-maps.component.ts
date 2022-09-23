import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { GoogleMap,MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GoogleMapsLoaderService } from './google-maps-loader.service';
import { DataService } from '../../service/data.service';
import { CommonDataService } from '../../Common/common-data.service';
import { Router } from '@angular/router';

/// <reference types="googlemaps" />
//https://www.freakyjolly.com/angular-google-maps-integration-with-markers-info-windows-tutorial/
// Marker interface for type safety
interface Marker {
  position: google.maps.LatLngLiteral;
  label?: string;
  title: string;

}

@Component({
  selector: 'app-google-maps-integration',
  templateUrl: 'google-maps.component.html',
  styleUrls: ['google-maps.component.scss'],
  providers: [GoogleMapsLoaderService],
})
export class GoogleMapsComponent implements OnInit, OnDestroy {
  apiLoaded: Observable<boolean>;
  maxZoom = 15;
  minZoom = 8;
  title: string = '';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  public machines: any = [];
  machinecount: number ;

            latitudes:  any ;
           logntitude:  any ;
            loginId:  any ;
            active:  any ;
            addresss:  any ;

  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;


  options: google.maps.MapOptions = {
    center: {
      lat: 17.1434937,
      lng: 79.5968943,
    },
    zoom: 11
  };

  markerOptions: google.maps.MarkerOptions = {draggable: true};
  markerPositions: google.maps.LatLngLiteral[] = [];

  

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  private activeInfoWindow: Marker;

  get infoWindowContent() {
    return this.activeInfoWindow;
  }

  set infoWindowContent(marker) {
    this.title = marker.title;
    this.activeInfoWindow = marker;
  }

  constructor(
    public gmLoader: GoogleMapsLoaderService,private commonData: CommonDataService,private service: DataService, 
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() { 
    this.getLocations() 
  }
  ngOnDestroy() {
    this.removeGoogleMapScript();
  }
  getLocations(){
    debugger;
    this.service.getMachines(this.commonData.merchantId).subscribe((resp: any) => {
      console.log("getMachines Reponse:::" + JSON.stringify(resp));
      if (resp && resp.statusCode == 200) {
        this.machines = resp.rowMachines;
        
        for (let i = 0; i < this.machines.length; i++) {
          for (var j = 0; j <= this.machines[0].machines.length; j++) {
            
            this.latitudes=this.machines[i].machines[j].latitude
            this.logntitude=this.machines[i].machines[j].logntitude
            this.loginId=this.machines[i].machines[j].loginId;
            this.active=this.machines[i].machines[j].active;
            this.addresss=this.machines[i].machines[j].address;
            
          }
        }
        
        this.setPositions(this.machines);      
      }
    });

  }

  
  markers: Marker[] = [
    {
      position: {
        lat: 17.1434937,
        lng: 79.5968943,
      },
      label: 'SVEC11',
      title: 'ComputerScience,Suryapet',
    },
    {
      position: {
        lat: 12.1454937,
        lng: 79.5968943,
      },
      label: 'SVEC12',
      title: 'EEE,Suryapet',
    },
    {
      position: {
        lat: 11.1434937,
        lng: 75.5968943,
      },
      label: 'SVEC13',
      title: 'Mech,Suryapet',
    },
  ]

  setPositions(machines:any []) {
    debugger;
    this.markers.forEach((marker) => {
      const {lat, lng} = {...marker.position};
      this.markerPositions.push({lat, lng});
    });
  }

  onMapClicked(event: any){
    debugger;
    console.table(event.coords);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  openInfoWindow(marker: MapMarker, item: Marker) {
    debugger;
    this.infoWindowContent = item;
    this.infoWindow.open(marker);
  }

  zoomIn() {
    if (this.zoom < this.maxZoom) this.zoom++;
    console.log('Get Zoom',this.map.getZoom());
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  removeGoogleMapScript() {
    // todo: temp workaround for 'You have included the Google Maps API multiple times on this page'
    const keywords = ['maps.googleapis'];

    // Remove google from BOM (window object)
    window.google = undefined;

    // Remove google map scripts from DOM
    const scripts = this.document.head.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      const scriptSource = scripts[i].getAttribute('src');
      if (scriptSource != null) {
        if (keywords.filter(item => scriptSource.includes(item)).length) {
          scripts[i].remove();
          // scripts[i].parentNode.removeChild(scripts[i]);
        }
      }
    }
  }

}
