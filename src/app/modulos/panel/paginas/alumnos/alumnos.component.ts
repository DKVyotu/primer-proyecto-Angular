import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from './modelos';
import { AlumnosService } from './alumnos.service';
import { Observable, Subscription, take } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { USER } from '../../../../core/models';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Destruyendo el componente...');
    this.alumnosSubscription?.unsubscribe();
  }

  editandoID: number | null = null;
  cargando = false;
  alumnosSubscription: Subscription | null = null; 

  formulario: FormGroup;

  listaAlumnos: Alumno[] = [];

  authuser: Observable <USER | null> 

  constructor(
    private FormBuilder: FormBuilder,
    private alumnosService: AlumnosService,
    private AuthService: AuthService
  ) {
    this.authuser = this.AuthService.authuser;
    this.cargaObservador();
    /* this.cargaAlumnos(); */

    this.formulario = this.FormBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    });
  }

  cargaObservador() {
    this.cargando = true;
    this.alumnosSubscription = this.alumnosService
      .getAlumnos$()
      .pipe(take(5))
      .subscribe({
        next: (data) => {
          console.log(data);
          this.listaAlumnos = data;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Carga de alumnos completada');
          this.cargando = false;
        },
      });
  }

/*   cargaAlumnos() {
    this.cargando = true;
    this.alumnosService
      .getAlumnos()
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => {
        this.cargando = false;
      });
  } */

  agregarAlumno() {
    /* Validando el formulario */
    if (!this.formulario.invalid) {
      /* Editando */
      if (this.editandoID) {
        console.log('Editando alumno ');
        this.listaAlumnos = this.listaAlumnos.map((elemento) =>
          elemento.id === this.editandoID
            ? { ...elemento, ...this.formulario.value }
            : elemento
        );
        this.formulario.reset();
        this.editandoID = null;
      } else {
      /* Creando */
        console.log('Agregando nuevo alumno');
        const nuevoAlumno = this.formulario.value;  
        this.formulario.reset();
        console.log(this.listaAlumnos);
        this.alumnosService.crearAlumno(nuevoAlumno).subscribe({
          next: (data) => {
            console.log('Alumno creado:', data);
            this.listaAlumnos = [...this.listaAlumnos, data]; 
          },
          error: (error) => {
            console.error('Error al crear el alumno:', error);
          },
          complete: () => {
            console.log('Proceso de creación de alumno completado');
          },
        });
        this.editandoID = null; // Reseteamos el ID de edición después de agregar un nuevo alumno
      }
    } else {
      alert(
        'Formulario inválido. Por favor, completa todos los campos requeridos.'
      );
    }
  }

  eliminarAlumno(id: number) {
    console.log(`Eliminar alumno con ID: ${id}`);
    this.alumnosService.deleteAlumno(id.toLocaleString()).subscribe({
      next: (data) => {
        console.log('Alumno eliminado:', data);
        this.listaAlumnos = data; // Actualizamos la lista de alumnos con la respuesta del servidor
      }
      , error: (error) => {
        console.error('Error al eliminar el alumno:', error);
      }
      , complete: () => {
        console.log('Proceso de eliminación de alumno completado');
      }
    }); 
  }

  editarAlumno(alumno: Alumno) {
    this.editandoID = alumno.id;
    console.log(`Editar alumno: ${alumno.id}`);
    this.formulario.patchValue(alumno);
  }

  cambiarEstado(alumno: Alumno) {
    console.log(`Cambiar estado de alumno: ${alumno.id}`);
    this.listaAlumnos = this.listaAlumnos.map((elemento) =>
      elemento.id === alumno.id
        ? { ...elemento, aprobado: !elemento.aprobado }
        : elemento
    );
  }
}
