import { Component, inject, OnInit } from '@angular/core';
import { Empleado } from '../../model/Persona';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registro } from '../../model/Registro';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BehaviorSubject } from 'rxjs';
import { DatosService } from '../../services/datos.service';
import { fechaValida } from '../../validators/fechaValida';

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
