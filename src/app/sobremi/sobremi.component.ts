import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../Modelo/Persona';
import { AutentificacionService } from '../Service/autentificacion.service';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  personas:Persona[]; 
  constructor(private router:Router, private loginPrd:AutentificacionService, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getPersona()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["editarPerfil"]); 
  }

  public visualizarMenu():boolean{
    return this.loginPrd.habilitarlogeo();
  }

}
