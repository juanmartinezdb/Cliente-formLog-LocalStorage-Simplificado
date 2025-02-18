import { Component, inject, OnInit } from '@angular/core';
import { Registro } from '../../model/Registro';
import { DatosService } from '../../services/datos.service';
import { ActivatedRoute } from '@angular/router';

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
route = inject(ActivatedRoute);
tipo: string | null = null;

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.tipo = params.get('tipo');
    console.log("Filtro recibido:", this.tipo);

    if (this.tipo) {
      this.filtrar(this.tipo);
    } else {
      this.cargaRegistros();
    }
  });
}

cargaRegistros() {
  this.datosService.registros$.subscribe(registros => {
    this.registros = registros;
  })
}

filtrar(value: String): void {
  if(value){
    this.datosService.registros$.subscribe(registros => {
      this.registros = registros.filter((r: Registro) => r.categoria === value);
    })
  } else {
    this.cargaRegistros()

  }
}

filtrarSelect(event: Event){
    const selectElement = event.target as HTMLSelectElement;
  if (selectElement) {
    const value = selectElement.value;
this.filtrar(value);
  }
}

borrarRegistro(reg: Registro){
  this.datosService.eliminarRegistro(reg);
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
