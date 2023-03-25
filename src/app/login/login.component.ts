import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from '../Service/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup; 

  constructor(private fb:FormBuilder, private router:Router,private loginPrd:AutentificacionService) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();

  }
  
  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    } 
    if(!this.loginPrd.ingresarPortfolio(this.myForm.value)){
      alert("Usuario o Contraseña incorrecta");
      return;
    }
    this.router.navigate(["/"]);
  }

  public get f():any{
    return this.myForm.controls;
  }
}

