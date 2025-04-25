import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from './modelos';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  editandoID: number | null = null;

  listaAlumnos: Alumno[] = [
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

  formulario: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.formulario = this.FormBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required]
    });
  }

  agregarAlumno() {

    if (this.editandoID && !this.formulario.invalid ) {
      /* Editando */
      console.log('Editando nuevo alumno ');
    } 
    if (!this.formulario.invalid) {
      /* Creando */
      console.log('Agregan nuevo alumno');
      const nuevoAlumno =  this.formulario.value;
      nuevoAlumno.aprobado = false;
      nuevoAlumno.id = Date.now();
      this.listaAlumnos = [...this.listaAlumnos, nuevoAlumno];
      this.formulario.reset();
      console.log(this.listaAlumnos);
    }
    else {
      console.log('Formulario inválido');
    }


  }


  eliminarAlumno(id: number) {
    console.log(`Eliminar alumno con ID: ${id}`);
    /* this.alumnos = this.ListaAlumnos.filter(alumno => alumno.id !== id); */
  }
  editarAlumno(alumno: Alumno) {
    console.log(`Editar alumno: ${alumno.id}`);
  }



}
