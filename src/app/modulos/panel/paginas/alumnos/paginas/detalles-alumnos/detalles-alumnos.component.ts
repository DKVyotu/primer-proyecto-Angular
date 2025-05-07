import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../alumnos.service';
import { Observable } from 'rxjs';
import { Alumno } from '../../modelos';

@Component({
  selector: 'app-detalles-alumnos',
  standalone: false,
  templateUrl: './detalles-alumnos.component.html',
  styleUrl: './detalles-alumnos.component.css',
})
export class DetallesAlumnosComponent {

  alumnos$: Observable<Alumno | null>;

  constructor(
    private activatedRouter: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log('ID del alumno: ', id);

    this.alumnos$ = this.alumnosService.getAlumnoId(id) 
    console.log('Parametros:', this.activatedRouter.snapshot.queryParams); 

  }
}
