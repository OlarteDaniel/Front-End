import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from '../Modelo/Experiencia';
import { ServiceService } from '../Service/service.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  public myForm!:FormGroup;
  experienciamod:Experiencia=new Experiencia();
  experienciaForm:Experiencia;

  constructor(private fb:FormBuilder,private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.iniciar();
    this.myForm = this.createMyForm();
  }

  iniciar(): void{
    let id = localStorage.getItem("id");
    this.service.getExperienciaId(+id!)
    .subscribe(data=>{
      this.experienciaForm=data;
    })
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      nombreEmpresa:['',Validators.required],
      tipoTrabajo:['',Validators.required],
      finic:['',Validators.required],
      ffin:['',Validators.required],
      url:['',Validators.required],
      urlFondo:['',Validators.required],
      linkProyecto:['',Validators.required],
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

  Agregar(exp:Experiencia){
    exp.nombreEmpresa = this.myForm.value.nombreEmpresa,
    exp.tipoTrabajo = this.myForm.value.tipoTrabajo,
    exp.fechaInicio = dayjs(this.myForm.value.finic).format("YYYY-MM-DD"),
    exp.fechaFin = dayjs(this.myForm.value.ffin).format("YYYY-MM-DD"),
    exp.url = this.myForm.value.url,
    exp.urlFondo = this.myForm.value.urlFondo,
    exp.linkProyecto =this.myForm.value.linkProyecto,
    exp.descripcion = this.myForm.value.descripcion;
    this.service.createExperiencia(exp)
    .subscribe(data=>{
      this.experienciamod=data;
      window.location.reload();
    })
    this.router.navigate(["/"]);
    alert("Se Agrego con Exito")
  }

}
