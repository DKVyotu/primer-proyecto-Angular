import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { TablaAlumnosComponent } from './paginas/alumnos/componentes/tabla-alumnos/tabla-alumnos.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavMenuComponent } from './componentes/nav-menu/nav-menu.component';

import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [PanelComponent, TablaAlumnosComponent, NavMenuComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [PanelComponent],
})
export class PanelModule {}
