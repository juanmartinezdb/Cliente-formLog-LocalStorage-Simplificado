import { Empleado } from './../../model/Persona';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registro } from '../../model/Registro';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BehaviorSubject } from 'rxjs';
import { DatosService } from '../../services/datos.service';
import { fechaValida } from '../../validators/fechaValida';
import { LocalStorageHandlerService } from '../../services/local-storage-handler.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
local = inject(LocalStorageHandlerService);
empleados : Empleado[] = [];
registros : Registro[] = [];
formH!: FormGroup;
registro!: Registro;
empleadoSeleccionado: number = 0;
datosService: DatosService = inject(DatosService);


constructor (private fb: FormBuilder) {
  this.formH = this.fb.group({
    empleado: ['', [Validators.required]],
    fecha: ['', [Validators.required, fechaValida()]],
    categoria: ['', [Validators.required]],
    titulo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
    cliente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    habitacion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    createdAt: [new Date()]
  });
}

ngOnInit(): void {

  const empleadosString = localStorage.getItem('empleados');
  this.empleados = empleadosString ? JSON.parse(empleadosString) as Empleado[] : [];
console.log(this.empleados);

  const registrosString = localStorage.getItem('registros');
  this.registros = registrosString? JSON.parse(registrosString) as Registro [] : [];


  this.formH.valueChanges.subscribe(value => {
    this.datosService.actualizarRegistro(value);
  })
  this.loadStorage();

}

//Se qe es una catetada, pero funciona, he intentado hacerlo con un event.target y me daba fallos de tipado.
saveStorage(){
this.local.set('empleado', this.formH.value.empleado);
this.local.set('fecha', this.formH.value.fecha);
this.local.set('categoria', this.formH.value.categoria);
this.local.set('titulo', this.formH.value.titulo);
this.local.set('descripcion', this.formH.value.descripcion);
this.local.set('cliente', this.formH.value.cliente);
this.local.set('habitacion', this.formH.value.habitacion);
}

loadStorage(){
  console.log('Entra');
console.log(this.local.get('empleado', "" ));
let form = {
  empleado: this.local.get('empleado', "" ),
  fecha : this.local.get('fecha', "" ),
  categoria: this.local.get('categoria', "" ),
  titulo : this.local.get('titulo', ""),
  descripcion : this.local.get('descripcion', ""),
  cliente : this.local.get('cliente', "" ),
  habitacion : this.local.get('habitacion', ""),
  createdAt: ""
  }
  this.formH.setValue(form);
}


selectEmpleado(){
    this.datosService.actualizaEmpleado(this.formH.value.empleado);

}



submit() {

  if (this.formH.valid) {
    const now = new Date();
    const eEmpleado: Empleado = this.empleados.find(e => e.id==this.formH.value.empleado)!;
    const nuevoRegistro: Registro = {
      empleado: eEmpleado,
      fecha: this.formH.value.fecha,
      cliente:  {
        nombre:  this.formH.value.cliente,
        habitacion:  this.formH.value.habitacion
       },
      titulo: this.formH.value.titulo,
      descripcion: this.formH.value.descripcion,
      categoria: this.formH.value.categoria,
      createdAt: now
    };

    this.datosService.aniadirRegistro(nuevoRegistro);
    console.log("registro agregado");
    console.log(localStorage.getItem('registros'));
  } else {
    console.log("registro no valido");

  }
}
}
