import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AutentificacionService } from '../Service/autentificacion.service';
import { CargarScriptsService } from '../Service/cargar-scripts.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  prueba:String;
  constructor(private _cargarScripts:CargarScriptsService, private loginPrd:AutentificacionService, private cookie:CookieService) {
    _cargarScripts.Cargar(["Modificar_navbar"]);
   }

  ngOnInit(): void {
  }

  public visualizarMenu():boolean{
    return this.loginPrd.habilitarlogeo();
  }

  public Logout(){
    this.cookie.delete("Login");
  }

}
