import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component'; 
import { TablaAlumnosComponent } from './paginas/alumnos/componentes/tabla-alumnos/tabla-alumnos.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    PanelComponent, 
    TablaAlumnosComponent, 
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [PanelComponent],
})
export class PanelModule {}
