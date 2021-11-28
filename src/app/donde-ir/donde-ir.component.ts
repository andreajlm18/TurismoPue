import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../service/lugares.service';

@Component({
  selector: 'app-donde-ir',
  templateUrl: './donde-ir.component.html',
  styleUrls: ['./donde-ir.component.css']
})
export class DondeIrComponent implements OnInit {
  lugar:any[]=[];
  constructor(private service: LugaresService) { 

  }

  ngOnInit(): void {
  this.lugar=this.service.getLugar();
  }

}
