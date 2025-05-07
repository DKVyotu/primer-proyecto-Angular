import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { TablaAlumnosComponent } from './componentes/tabla-alumnos/tabla-alumnos.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlumnosService } from './alumnos.service';
import { DetallesAlumnosComponent } from './paginas/detalles-alumnos/detalles-alumnos.component';

@NgModule({
  declarations: [AlumnosComponent, TablaAlumnosComponent, DetallesAlumnosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [AlumnosComponent],
})
export class AlumnosModule {}
