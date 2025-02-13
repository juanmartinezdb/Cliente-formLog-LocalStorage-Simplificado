import { Component, Input } from '@angular/core';
import { Registro } from '../../model/Registro';

@Component({
  selector: 'app-datos-registro',
  imports: [],
  templateUrl: './datos-registro.component.html',
  styleUrl: './datos-registro.component.css'
})
export class DatosRegistroComponent {
@Input() registro: Registro | null = null;



}
