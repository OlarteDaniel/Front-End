import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../Modelo/Educacion';
import { AutentificacionService } from '../Service/autentificacion.service';
import { CargarScriptsService } from '../Service/cargar-scripts.service';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones:Educacion[];

  constructor(private _cargarScripts:CargarScriptsService,private service:ServiceService, private router:Router, private loginPrd:AutentificacionService) {
    _cargarScripts.Cargar(['Animacion_educacion']);
    _cargarScripts.Cargar(['Libro']);
  }

  ngOnInit(): void {
    this.service.getEducacion()
    .subscribe(data=>{
      this.educaciones=data;
    })
  }

  Editar(educacion:Educacion):void{
    localStorage.setItem("id",educacion.id.toString());
    this.router.navigate(["editarEducacion"]);

  }

  public visualizarMenu():boolean{
    return this.loginPrd.habilitarlogeo();
  }

}