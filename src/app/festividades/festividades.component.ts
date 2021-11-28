import { Component, OnInit } from '@angular/core';
import { FestividadesService } from '../service/festividades.service';

@Component({
  selector: 'app-festividades',
  templateUrl: './festividades.component.html',
  styleUrls: ['./festividades.component.css']
})
export class FestividadesComponent implements OnInit {
  festividad:any[]=[];
  constructor(private service: FestividadesService) { 

  }

  ngOnInit(): void {
  this.festividad=this.service.getFestividad();
  }

}
