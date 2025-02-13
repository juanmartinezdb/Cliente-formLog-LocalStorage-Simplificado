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

ngOnInit(): void {
    
}

}
