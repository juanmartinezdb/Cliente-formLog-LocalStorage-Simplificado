import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registro } from '../model/Registro';
import { Empleado } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
empleados: Empleado[] = [];

private registroSubject = new BehaviorSubject<any>(null);
registros$ = this.registroSubject.asObservable();

private empleadoSubject = new BehaviorSubject<any>(null);
empleadoSeleccionado$ = this.empleadoSubject.asObservable();

private formSubject= new BehaviorSubject<any>(null);
formCambios$ = this.formSubject.asObservable();

constructor() {
  this.cargaEmpleados();
  this.cargarRegistros();
}

cargaEmpleados = () => {
  const localEmpleados = localStorage.getItem('empleados');
  this.empleados = localEmpleados? JSON.parse(localEmpleados): [];
}
cargarRegistros(){
  const registrosString = localStorage.getItem('registros');
  const registros = registrosString? JSON.parse(registrosString) as Registro[]: [];
  this.registroSubject.next(registros);
}

eliminarRegistro(createdAt: Date){
  const registrosActuales = this.registroSubject.getValue() as Registro [];
  const nuevosRegistros = registrosActuales.filter(r=> r.createdAt!= createdAt);
this.registroSubject.next(nuevosRegistros);
localStorage.setItem('registros', JSON.stringify(nuevosRegistros));
}

aniadirRegistro(reg: Registro) {
  const registrosActuales = this.registroSubject.getValue() as Registro [];
  registrosActuales.push(reg);
  this.registroSubject.next(registrosActuales);
  localStorage.setItem('registros', JSON.stringify(registrosActuales));
}

actualizarRegistro(value: any){
  this.formSubject.next(value);
}

actualizaEmpleado(id: number){
  this.empleadoSubject.next(this.empleados.find(e=> e.id==id));
}


registrosActualizados(value: any) {
    this.registroSubject.next(value);
  }


}
