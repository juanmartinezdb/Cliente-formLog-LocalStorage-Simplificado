import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fechaValida(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const fechaSeleccionada = new Date(value);
    const hoy = new Date();

    const haceUnMes = new Date();
    haceUnMes.setMonth(haceUnMes.getMonth() - 1);
    const esFechaInvalida = fechaSeleccionada < haceUnMes || fechaSeleccionada > hoy;

    return esFechaInvalida ? { fechaInvalida: true } : null;
  };
}
