import { Component, OnInit } from '@angular/core';
import { FestividadesService } from '../service/festividades.service';
import { LugaresService } from '../service/lugares.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  lugar:any[]=[];
  festividad:any[]=[];
    constructor(private service: LugaresService, private servicefest: FestividadesService) { 
  
    }
  
    ngOnInit(): void {
    this.lugar=this.service.getLugar();
    this.festividad=this.servicefest.getFestividad();
    }

}
