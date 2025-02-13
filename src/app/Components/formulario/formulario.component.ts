import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/Persona';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registro } from '../../model/Registro';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
empleados : Empleado[] = [];
registros : Registro[] = [];
formH!: FormGroup;
registro!: Registro;

constructor (private fb: FormBuilder) {
  this.formH = this.fb.group({
    empleado: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    cliente: ['', [Validators.required]],
    habitacion: ['', [Validators.required]],
    createdAt: [new Date()]
  });
}

ngOnInit(): void {

  const empleadosString = localStorage.getItem('empleados');
  this.empleados = empleadosString ? JSON.parse(empleadosString) as Empleado[] : [];
console.log(this.empleados);

  const registrosString = localStorage.getItem('registros');
  this.registros = registrosString? JSON.parse(registrosString) as Registro [] : [];
}

submit() {
  console.log(this.formH);

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

    const registrosString = localStorage.getItem('registros');
    this.registros = registrosString? JSON.parse(registrosString) as Registro [] : [];
    this.registros.push(nuevoRegistro);
    localStorage.setItem('registros', JSON.stringify(this.registros));
    console.log("registro agregado");
    console.log(localStorage.getItem('registros'));
  }
}
}
