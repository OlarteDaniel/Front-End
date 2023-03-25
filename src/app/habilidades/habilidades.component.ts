import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../Service/cargar-scripts.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(private _cargarScripts:CargarScriptsService) {
    
    _cargarScripts.Cargar(["porcentaje"]);
   }

  ngOnInit(): void {
  }

}
