import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../modelos';


@Component({
  selector: 'app-tabla-alumnos',
  standalone: false,
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'aprobado', 'acciones'];

  @Input()
  lista: Alumno[] = [];

  @Output() 
  eliminarAlumno = new EventEmitter<number>();

  @Output()
  editarAlumno = new EventEmitter<Alumno>();
}
