import { Component, inject, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-side-observados',
  imports: [],
  templateUrl: './side-observados.component.html',
  styleUrl: './side-observados.component.css'
})
export class SideObservadosComponent implements OnInit {
datosService: DatosService = inject(DatosService);
datosFormulario: any = {};
modoVista: string = '';

ngOnInit(): void {

  this.datosService.formCambios$.subscribe(value => {
    this.datosFormulario = value;
  })

}

}
