import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Inicio Servicios

import { CargarScriptsService } from './Service/cargar-scripts.service';
import { ServiceService } from './Service/service.service';
import { AutentificacionService } from './Service/autentificacion.service';
import { CookieService } from 'ngx-cookie-service';
//Fin Servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarExperienciaComponent } from './editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { AgregarExperienciaComponent } from './agregar-experiencia/agregar-experiencia.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    EditarPerfilComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    SobremiComponent,
    AgregarExperienciaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CargarScriptsService,
    ServiceService,
    AutentificacionService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
