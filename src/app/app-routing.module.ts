import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarExperienciaComponent } from './editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { PermisoGuard } from './guards/permiso.guard';
import { AgregarExperienciaComponent } from './agregar-experiencia/agregar-experiencia.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sobreMi',component:SobremiComponent},
  {path:'agregarExperiencia',component:AgregarExperienciaComponent,canActivate:[PermisoGuard]},
  {path:'editarPerfil',component:EditarPerfilComponent, canActivate:[PermisoGuard]},
  {path:'editarExperiencia',component:EditarExperienciaComponent, canActivate:[PermisoGuard]},
  {path:'editarEducacion',component:EditarEducacionComponent, canActivate:[PermisoGuard]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
