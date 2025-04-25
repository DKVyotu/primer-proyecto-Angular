import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavMenuComponent } from './componentes/nav-menu/nav-menu.component';

import { MatListModule } from '@angular/material/list';
import { AlumnosModule } from './paginas/alumnos/alumnos.module';

@NgModule({
  declarations: [PanelComponent, NavMenuComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    AlumnosModule
    
  ],
  exports: [PanelComponent],
})
export class PanelModule {}
