import { Component, OnInit } from '@angular/core';
import { Registro } from '../../model/Registro';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
registros: Registro[] =  []
registroSelect: Registro |null = null;

ngOnInit(): void {
const registrosstring = localStorage.getItem('registros');
this.registros = registrosstring ? JSON.parse(registrosstring) as Registro[] : [];

}

mostrarDetalles = (registro) => {

}
}
