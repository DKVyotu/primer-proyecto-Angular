import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../modelos';
import { Observable } from 'rxjs';
import { USER } from '../../../../../../core/models';
import { AuthService } from '../../../../../../core/services/auth.service';


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

  @Output()
  cambiarEstado = new EventEmitter<Alumno>();

  authuser: Observable <USER | null>

  constructor(private AuthService: AuthService) { 
    this.authuser = this.AuthService.authuser;
  }
}
