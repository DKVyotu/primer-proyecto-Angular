import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciar-sesion.component';

/* Aca estamos dentro de URL/autentificacion/iniciar-sesion */
const routes: Routes = [
  {
    path: '',
    component: IniciarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciarSesionRoutingModule { }
