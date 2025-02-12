export interface Persona {
  id: number;
    nombre: string;
}

export interface Cliente extends Persona {
    habitacion: string;
}

export interface Empleado extends Persona {
    departamento : string;
}
