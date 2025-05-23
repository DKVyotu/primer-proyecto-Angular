import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { OrdenesComponent } from './ordenes.component';

/*  Aca estamos dentro de URL/panel/ordenes/---- */
const routes: Routes = [
  {
    path: '',
    component: OrdenesComponent,
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }
