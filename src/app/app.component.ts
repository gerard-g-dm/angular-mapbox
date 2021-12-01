import { Component } from '@angular/core';
import { LngLat, MapLayerMouseEvent } from 'mapbox-gl';
import { GeoJsonProperties } from 'geojson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedElement: GeoJsonProperties;
  selectedLngLat: LngLat;
  cursorStyle: string;
  communesRennes = {
    type: 'geojson',
    data: "../assets/communes-rennes.json"
  };
  style = {
    sources: {
      world: {
        type: "geojson",
        data: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
      }
    },
    version: 8,
    layers: [
      {
        "id": "countries",
        "type": "fill",
        "source": "world",
        "layout": {},
        "paint": {
          'fill-color': 'rgba(0, 0, 0, 0.4)',
          'fill-outline-color': 'rgba(50, 0, 0, 1)'
        }
      }
    ]
  };
  onClick(evt: MapLayerMouseEvent) {
    this.selectedLngLat = evt.lngLat;
    this.selectedElement = evt.features![0].properties;
    console.log('this.selectedElement : ', this.selectedElement);
  };
}
