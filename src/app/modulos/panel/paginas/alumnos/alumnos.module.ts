import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { TablaAlumnosComponent } from './componentes/tabla-alumnos/tabla-alumnos.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AlumnosComponent, TablaAlumnosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [AlumnosComponent],
})
export class AlumnosModule {}
