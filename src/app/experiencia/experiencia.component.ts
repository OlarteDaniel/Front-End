import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../Service/cargar-scripts.service';
import { ServiceService } from '../Service/service.service';
import { Experiencia } from '../Modelo/Experiencia';
import { Router } from '@angular/router';
import { AutentificacionService } from '../Service/autentificacion.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  experiencias:Experiencia[];
  constructor(private _cargarScripts:CargarScriptsService, private service:ServiceService, private router:Router, private loginPrd:AutentificacionService) {
    _cargarScripts.Cargar(["deslizar"]); 
    _cargarScripts.Cargar(['Animacion_experiencia']);
  }

  ngOnInit(): void {
    this.service.getExperiencia()
    .subscribe(data=>{
      this.experiencias=data;
    })
  }

  Editar(experiencia:Experiencia):void{
    localStorage.setItem("id",experiencia.id.toString());
    this.router.navigate(["editarExperiencia"]);
  }

  Eliminar(experiencia:Experiencia):void{
    this.service.deleteExperiencia(experiencia)
    .subscribe(data=>{
      this.experiencias = this.experiencias.filter(p=>p!=experiencia);
      alert("Experiencia Eliminado...")
    })
  }

  Agregar():void{
    this.router.navigate(["agregarExperiencia"]);
  }

  public visualizarMenu():boolean{
    return this.loginPrd.habilitarlogeo();
  }
}

