import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarSesionRoutingModule } from './iniciar-sesion-routing.module';
import { IniciarSesionComponent } from './iniciar-sesion.component';
import { CompartidoModule } from '../../../../compartido/compartido.module';


@NgModule({
  declarations: [
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    IniciarSesionRoutingModule,
    CompartidoModule
  ]
})
export class IniciarSesionModule { }
