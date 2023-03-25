import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from '../Modelo/Educacion';
import { ServiceService } from '../Service/service.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  public myForm!:FormGroup;
  educacionForm:Educacion=new Educacion();
  educacionmod : Educacion;

  constructor(private fb:FormBuilder, private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.iniciar();
    this.Editar();
    this.myForm = this.createMyForm();
  }

  iniciar(): void{
    let id = localStorage.getItem("id");
    this.service.getEducacionId(+id!)
    .subscribe(data=>{
      this.educacionForm=data;
    })
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      nombreInstitucion:['',Validators.required],
      titulo:['',Validators.required],
      finic:['',Validators.required],
      ffin:['',Validators.required],
      url:['',Validators.required],
      descripcion:['',Validators.required]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }
      console.log(this.myForm.value);
  }

  public get f():any{
    return this.myForm.controls;
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getEducacionId(+id!)
    .subscribe(data=>{
      this.educacionmod=data;
    })
  }

  Actualizar(educ:Educacion){
    educ.nombreInstitucion = this.myForm.value.nombreInstitucion,
    educ.titulo = this.myForm.value.titulo,
    educ.fechaInicio = dayjs(this.myForm.value.finic).format("YYYY-MM-DD"),
    educ.fechaFin = dayjs(this.myForm.value.ffin).format("YYYY-MM-DD"),
    educ.url = this.myForm.value.url,
    educ.descripcion = this.myForm.value.descripcion;
    this.service.updateEducacion(educ)
    .subscribe(data=>{
      this.educacionmod=data;
      window.location.reload();
    })
    this.router.navigate(["/"]);
    alert("Se actualizo con Exito")
  }

}
