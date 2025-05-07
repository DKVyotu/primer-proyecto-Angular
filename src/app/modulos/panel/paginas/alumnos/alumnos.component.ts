import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from './modelos';
import { AlumnosService } from './alumnos.service';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnDestroy {

  ngOnDestroy(): void {
    console.log('Destruyendo el componente...');  
    this.alumnosSubscription?.unsubscribe(); 
  }

  editandoID: number | null = null;
  cargando = false;
  alumnosSubscription: Subscription | null = null; // Subscription to manage the observable

  formulario: FormGroup;

  listaAlumnos: Alumno[] = [ ];

  constructor(private FormBuilder: FormBuilder, private alumnosService: AlumnosService) {

    this.cargaObservador();
    /* this.cargaAlumnos(); */

    this.formulario = this.FormBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required]
    });
  }
  
  cargaObservador() {
    this.cargando = true;
    this.alumnosSubscription = this.alumnosService
    .getAlumnos$()
      .pipe(take(5)) 
      .subscribe({
        next: (data) => {
          console.log(data)
          this.listaAlumnos = data;
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('Carga de alumnos completada')
          this.cargando = false;
        }

      })

  }

  cargaAlumnos() {
    this.cargando = true;
    this.alumnosService.getAlumnos()
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => {this.cargando = false})
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
