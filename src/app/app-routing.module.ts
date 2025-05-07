import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './modulos/panel/panel.component';
import { AutentificacionComponent } from './modulos/autentificacion/autentificacion.component';

const routes: Routes = [
  {
    /* solo puede ir gente logeada */
    path: 'panel',
    component: PanelComponent,
    loadChildren: () =>
      import('./modulos/panel/panel.module')
        .then((archivo) => archivo.PanelModule),

  }, 
  {
    path: 'autentificacion',
    loadChildren: () =>
      import('./modulos/autentificacion/autentificacion.module')
        .then((archivo) => archivo.AutentificacionModule),

  },
  {
    /* Redirecion a cualquier URL no valida a que se autentifique */
    path: '**',
    redirectTo: 'autentificacion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
