import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { adminGuard } from '../../core/guards/admin.guard';


/*  Aca estamos dentro de URL/panel/---- */
const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: () =>
      import('./paginas/alumnos/alumnos.module').then((archivo) => archivo.AlumnosModule),
  },
  {
    path: 'ordenes',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./paginas/ordenes/ordenes.module').then((archivo) => archivo.OrdenesModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
