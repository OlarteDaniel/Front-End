import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../Modelo/Persona';
import { ServiceService } from '../Service/service.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  public myForm!:FormGroup;
  personamod :Persona=new Persona();
  personaForm : Persona;

  constructor(private fb:FormBuilder,private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.iniciar();
    this.Editar();
    this.myForm = this.createMyForm();
  }

  iniciar(): void{
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id!)
    .subscribe(data=>{
      this.personaForm=data;
    })
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      nombre:[Validators.required],
      apellido:[Validators.required],
      correo:[Validators.required],
      fnac:[Validators.required],
      telefono:[Validators.required],
      url:[Validators.required],
      titulo:[Validators.required],
      localidad:[Validators.required],
      SobreMi:[Validators.required]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }
  }

  public get f():any{
    return this.myForm.controls;
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id!)
    .subscribe(data=>{
      this.personamod=data;
    })
    
  }

  Actualizar(pers:Persona){
    
    pers.nombre = this.myForm.value.nombre,
    pers.apellido = this.myForm.value.apellido,
    pers.correo = this.myForm.value.correo,
    pers.fnac = dayjs(this.myForm.value.fnac).format("YYYY-MM-DD"),
    pers.numero = this.myForm.value.telefono,
    pers.url = this.myForm.value.url,
    pers.titulo = this.myForm.value.titulo,
    pers.localidad = this.myForm.value.localidad,
    pers.sobreMi = this.myForm.value.SobreMi;
    /*console.log(dayjs(this.myForm.value.fnac).format("MM/YYYY"));*/
    this.service.updatePersona(pers)
    .subscribe(data=>{
      this.personamod=data;
      window.location.reload();
    })
    this.router.navigate(["/"]);
    alert("Se actualizo con Exito")
  }

  

}

