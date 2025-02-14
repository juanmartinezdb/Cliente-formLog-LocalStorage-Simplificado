import { DatosService } from './../../services/datos.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Registro } from '../../model/Registro';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
log: number = 0;
warn: number = 0;
error: number = 0;
datosService: DatosService = inject(DatosService);

ngOnInit(): void {

this.datosService.registros$.subscribe((registro: Registro[]) => {
  console.log("log del registro"+registro);

  if (registro){
    this.log = registro.filter( reg => reg.categoria=='log').length;
    this.warn = registro.filter( reg => reg.categoria=='warn').length;
    this.error = registro.filter( reg => reg.categoria=='error').length;
  }
})

}
}
