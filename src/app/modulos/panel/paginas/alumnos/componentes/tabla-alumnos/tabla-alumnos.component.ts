import { Component } from '@angular/core';
import { Alumno } from '../../modelos';


const ListaAlumnos: Alumno[] = [
  { id: 1, nombre: 'Juan', apellido: 'Perez', aprobado: true },
  { id: 2, nombre: 'Maria', apellido: 'Lopez', aprobado: false },
  { id: 3, nombre: 'Carlos', apellido: 'Sanchez', aprobado: true },
  { id: 4, nombre: 'Ana', apellido: 'Gomez', aprobado: true },
  { id: 5, nombre: 'Luis', apellido: 'Fernandez', aprobado: false },
  { id: 6, nombre: 'Sofia', apellido: 'Martinez', aprobado: true },
  { id: 7, nombre: 'Diego', apellido: 'Torres', aprobado: false },
  { id: 8, nombre: 'Lucia', apellido: 'Ramirez', aprobado: true },
  { id: 9, nombre: 'Jorge', apellido: 'Herrera', aprobado: false },
  { id: 10, nombre: 'Valeria', apellido: 'Cruz', aprobado: true },
];


@Component({
  selector: 'app-tabla-alumnos',
  standalone: false,
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'aprobado', 'acciones'];
  dataSource = ListaAlumnos;

}
