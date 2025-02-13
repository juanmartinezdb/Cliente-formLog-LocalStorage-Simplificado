import { FormularioComponent } from './../formulario/formulario.component';
import { Empleado } from './../../model/Persona';
import { DatosService } from './../../services/datos.service';
import { Component, inject, OnInit } from '@angular/core';
import { SideObservadosComponent } from '../side-observados/side-observados.component';

@Component({
  selector: 'app-side-bar',
  imports: [SideObservadosComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
datosService: DatosService = inject(DatosService);
empleado: Empleado | null = null;




  ngOnInit(): void {
    this.datosService.empleadoSeleccionado$.subscribe(value => {
      this.empleado = value
    })
  }
}
