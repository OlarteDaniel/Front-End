import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../Modelo/Persona';
import { AutentificacionService } from '../Service/autentificacion.service';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServiceService, private router:Router, private loginPrd:AutentificacionService) { }

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
