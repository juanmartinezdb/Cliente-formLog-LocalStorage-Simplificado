import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DataJSON } from '../model/DataJSON';

@Injectable({
  providedIn: 'root'
})
export class IniciarStorageService {
http: HttpClient= inject(HttpClient);

  constructor() { }

iniciarStorage(): void {
  const iniciado = localStorage.getItem('ini');

  if (!iniciado){
    this.http.get<DataJSON>('/datos.json').subscribe({
      next: (data) => {
        localStorage.setItem('empleados', JSON.stringify(data.empleados));
        localStorage.setItem('registros', JSON.stringify(data.registros) );
        localStorage.setItem('ini', 'true');
        console.log('datos iniciados en localStorage, OK');
      },
      error: (err) => console.error('Error al cargar el JSON', err)
    })
  } else {
    console.log('Los datos ya estaban inicializados');
  }
}
}
