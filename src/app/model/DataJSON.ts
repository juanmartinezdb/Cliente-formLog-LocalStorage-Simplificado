import { Cliente, Empleado } from "./Persona";
import { Registro } from "./Registro";

export interface DataJSON {
empleados: Empleado[];
registros: Registro[];
}
