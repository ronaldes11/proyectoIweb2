import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard';
import { DashboardService } from '../dashboard.service';
import {Proyectos} from '../proyectos';
import {ProyectosService } from '../proyectos.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    proyectos:Proyectos;
    private sub: any;
     id:string;
    constructor(private route: ActivatedRoute,
                private service: ProyectosService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.proyectos = this.service.findById(params['id']);});
}
}
