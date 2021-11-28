import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FestividadesService } from 'src/app/service/festividades.service';
import { LugaresService } from 'src/app/service/lugares.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lugar:any[]=[];
  festividad:any[]=[];
    constructor(private service: LugaresService, private servicefest: FestividadesService, private router: Router) { 
  
    }
  
    ngOnInit(): void {
    this.lugar=this.service.getLugar();
    this.festividad=this.servicefest.getFestividad();
    }
}
