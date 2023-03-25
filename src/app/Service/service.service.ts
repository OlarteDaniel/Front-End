import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import {Experiencia} from '../Modelo/Experiencia';
import { Educacion } from '../Modelo/Educacion';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='https://portfolio-backend-3cwb.onrender.com';

  getUsuario(){
    return this.http.get<Usuario[]>(this.Url+"/servidor/ver/usuario");
  }

  getUsuarioId(id:number){
    return this.http.get<Usuario>(this.Url+"/servidor/buscar/usuario/"+id);
  }

  getPersona(){
    return this.http.get<Persona[]>(this.Url+"/servidor/ver/persona");
  }

  getExperiencia(){
    return this.http.get<Experiencia[]>(this.Url+"/servidor/ver/experiencia");
  }

  getEducacion(){
    return this.http.get<Educacion[]>(this.Url+"/servidor/ver/educacion");
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/servidor/buscar/persona/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/servidor/editar/persona/"+persona.id,persona);
  }

  getExperienciaId(id:number){
    return this.http.get<Experiencia>(this.Url+"/servidor/buscar/experiencia/"+id);
  }

  updateExperiencia(experiencia:Experiencia){
    return this.http.put<Experiencia>(this.Url+"/servidor/editar/experiencia/"+experiencia.id,experiencia);
  }

  getEducacionId(id:number){
    return this.http.get<Educacion>(this.Url+"/servidor/buscar/educacion/"+id);
  }

  updateEducacion(educacion:Educacion){
    return this.http.put<Educacion>(this.Url+"/servidor/editar/educacion/"+educacion.id,educacion);
  }

  deleteExperiencia(experiencia:Experiencia){
    return this.http.delete<Experiencia>(this.Url+"/servidor/eliminar/experiencia/"+experiencia.id);
  }

  createExperiencia(experiencia:Experiencia){
    return this.http.post<Experiencia>(this.Url+"/servidor/agregar/experiencia",experiencia);
  }

}
