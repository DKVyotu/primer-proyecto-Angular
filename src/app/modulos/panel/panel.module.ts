import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { NavMenuComponent } from './componentes/nav-menu/nav-menu.component';
import { TablaAlumnosComponent } from './paginas/alumnos/componentes/tabla-alumnos/tabla-alumnos.component';


@NgModule({
  declarations: [
    PanelComponent,
    NavMenuComponent,
    TablaAlumnosComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
