import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from '../Modelo/Usuario';
import { ServiceService } from './service.service';


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  /*private ingresar:boolean = false;*/
  usuario:Usuario[];
  constructor(private service:ServiceService, private cookie:CookieService) { 
    this.service.getUsuario()
      .subscribe(data=>{
        this.usuario=data;
      })
  }


  public ingresarPortfolio(obj:any):boolean{
    if(obj.usuario == this.usuario[0]?.email && obj.password == this.usuario[0]?.password){
      this.cookie.set("Login","Logueado");
     /* this.ingresar = true;*/
    }
    return this.cookie.check("Login");
    /*return this.ingresar;*/
    /*
    this.ingresar = obj.usuario == this.usuario[0]?.email && obj.password == this.usuario[0]?.password;
    return this.ingresar;
    */
  }

  public habilitarlogeo():boolean{
    return this.cookie.check("Login");
  }

}
