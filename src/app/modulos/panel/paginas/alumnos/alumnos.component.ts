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

    /* Validando el formulario */
    if (!this.formulario.invalid) { 
      /* Editando */
      if (this.editandoID ) {
        console.log('Editando alumno ');    
        this.listaAlumnos = this.listaAlumnos.map((elemento) => 
          elemento.id === this.editandoID ? { ...elemento, ...this.formulario.value } : elemento ); 
        this.formulario.reset();
        this.editandoID = null;        
      } 
      /* Creando */
      else {        
        console.log('Agregando nuevo alumno');
        console.log(this.editandoID);
        const nuevoAlumno =  this.formulario.value;
        nuevoAlumno.aprobado = false;
        nuevoAlumno.id = Date.now();
        this.listaAlumnos = [...this.listaAlumnos, nuevoAlumno];
        this.formulario.reset();
        console.log(this.listaAlumnos);
      }
    }
    else {
      alert('Formulario inválido. Por favor, completa todos los campos requeridos.');
    }
  }

  eliminarAlumno(id: number) {
    console.log(`Eliminar alumno con ID: ${id}`);
    this.listaAlumnos = this.listaAlumnos.filter((alumno) => alumno.id !== id);
  }
  editarAlumno(alumno: Alumno) {
    this.editandoID = alumno.id;
    console.log(`Editar alumno: ${alumno.id}`);
    this.formulario.patchValue(alumno); 
  }

  cambiarEstado(alumno: Alumno) {
    console.log(`Cambiar estado de alumno: ${alumno.id}`);
    this.listaAlumnos = this.listaAlumnos.map((elemento) => 
      elemento.id === alumno.id ? { ...elemento, aprobado: !elemento.aprobado } : elemento ); 
  }
}
