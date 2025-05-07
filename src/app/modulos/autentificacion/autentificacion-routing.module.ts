import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentificacionComponent } from './autentificacion.component';

/* Aca estamos dentro URL/autentificacion/ */
const routes: Routes = [
  {
    path: '',
    component: AutentificacionComponent,
    children: [ 
      {
        path: 'inicio-sesion',
        loadChildren: () =>
          import('./paginas/iniciar-sesion/iniciar-sesion.module').then(
            (archivo) => archivo.IniciarSesionModule
          ),
      },
      {
        path: 'registro',
        loadChildren: () =>
          import('./paginas/registro/registro.module').then(
            (archivo) => archivo.RegistroModule
          ),
      },
      /* Por defecto los redirecionamos a login */
      {
        path: '**',
        redirectTo: 'inicio-sesion',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutentificacionRoutingModule {}
