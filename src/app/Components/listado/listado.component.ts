import { Component, inject, OnInit } from '@angular/core';
import { Registro } from '../../model/Registro';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
registros: Registro[] =  []
registroSelect: Registro |null = null;
datosService: DatosService = inject(DatosService);

ngOnInit(): void {
this.datosService.registros$.subscribe(registros => {
  this.registros = registros;
})

}

borrarRegistro(reg: Registro){
  this.datosService.eliminarRegistro(reg.createdAt);
}

mostrarDetalles = (registro: Registro) => {
  this.registroSelect = registro;
const registroSelecto = {
  categoria: registro?.categoria,
          fecha: registro?.fecha,
          titulo: registro?.titulo,
          descripcion: registro?.descripcion,
          cliente: registro?.cliente?.nombre,
          habitacion: registro?.cliente?.habitacion
}
this.datosService.actualizarRegistro(registroSelecto);
}
}
