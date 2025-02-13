import { Cliente, Empleado } from "./Persona";

export interface Registro {
  //empleado, fecha en qeu se realiza el registro(datepiker) (ultimo mes y no posterior a hoy),
  //  cliente, titulo, descripcion, categoria(log, warn, error),
  empleado: Empleado;
  fecha : string;
  cliente: Cliente;
  titulo: string;
  descripcion: string;
  categoria: "log"|"warn"|"error";
  createdAt: Date;
}
