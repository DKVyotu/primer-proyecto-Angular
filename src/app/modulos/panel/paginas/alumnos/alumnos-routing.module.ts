import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { DetallesAlumnosComponent } from './paginas/detalles-alumnos/detalles-alumnos.component';

/*  Aca estamos dentro de URL/panel/alumnos/---- */
const routes: Routes = [
  {
    /* aca indicamos qu estamos en alumnos vacio muestra alumnos  */ 
    path: '',
    component: AlumnosComponent,
  },
  {
    path: ':id',
    component: DetallesAlumnosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
