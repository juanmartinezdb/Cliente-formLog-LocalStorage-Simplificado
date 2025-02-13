import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registro } from '../model/Registro';

@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {
private registroSubject = new BehaviorSubject<Registro[]>([]);
registros$: Observable<Registro[]> = this.registroSubject.asObservable();


  constructor() { }


}
