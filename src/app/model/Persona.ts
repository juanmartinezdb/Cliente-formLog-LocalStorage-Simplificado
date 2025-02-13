export interface Persona {
    nombre: string;
}

export interface Cliente extends Persona {
    habitacion: string;
}

export interface Empleado extends Persona {
  id: number;
  departamento : string;
}
