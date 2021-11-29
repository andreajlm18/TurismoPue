import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LugaresService } from '../service/lugares.service';
declare var L: any;
import 'leaflet';
import 'leaflet-routing-machine';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  lugar: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private lugaresService: LugaresService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.lugar = this.lugaresService.getInfo(params['id']);
    });
  }
  lat: any;
  lng: any;

  ngOnInit(): void {
    this.getUserLocation();
  }
  regresar() {
    this.router.navigate(['heroes']);
  }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat, this.lng);

        var map = L.map('map').setView([this.lat, this.lng], 20);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
          map
        );

        L.Routing.control({
          waypoints: [
            L.latLng(this.lat, this.lng),
            L.latLng(18.9023, -98.4392),
          ],
          languge: 'es',
        }).addTo(map);
      });
    } else {
      console.log('User not allow');
    }
  }
}
