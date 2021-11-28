import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LugaresService } from '../service/lugares.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
lugar:any={};
  constructor(private activatedRoute: ActivatedRoute, private lugaresService: LugaresService, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      this.lugar = this.lugaresService.getInfo(params['id']);
    })
  }

  ngOnInit(): void {
  }
  regresar(){
    this.router.navigate(['heroes']);
  }
}
