import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component'; 
import { TablaAlumnosComponent } from './componentes/tabla-alumnos/tabla-alumnos.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AlumnosComponent,
    TablaAlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    
  ],
  exports: [
    AlumnosComponent, 
  ]
  
  
})
export class AlumnosModule { }
