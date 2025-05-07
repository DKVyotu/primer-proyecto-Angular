import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { AutentificacionComponent } from './autentificacion.component';


@NgModule({
  declarations: [
    AutentificacionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatCardModule
  ]
})
export class AutentificacionModule { }
