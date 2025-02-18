import { Routes } from '@angular/router';
import { ListadoComponent } from './Components/listado/listado.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

export const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'listado/:tipo', component: ListadoComponent }, //cambiar luego segun se defina el tipo
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario', component: FormularioComponent }
];
