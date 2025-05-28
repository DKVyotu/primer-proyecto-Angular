import { Injectable } from '@angular/core';
import { Alumno, CrearAlumno } from './modelos';
import { Observable, of, map, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/* const FalsaAPI: Alumno [] = [
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
]; */

@Injectable({ providedIn: 'root' })
export class AlumnosService {
  constructor(private http: HttpClient) {}

  crearAlumno(alumno: CrearAlumno): Observable<Alumno> {
    return this.http.post<Alumno>('http://localhost:3000/alumnos', alumno);
  }


  getAlumnos$(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>('http://localhost:3000/alumnos');
  }

  getAlumnoId(id: number): Observable<Alumno | null> { 
    return this.http.get<Alumno>(`http://localhost:3000/alumnos/${id}`).pipe(
      map((response) => response || null)
    );
  }

  deleteAlumno(id: string): Observable<Alumno[]> {
    return this.http
    .delete<Alumno>(`http://localhost:3000/alumnos/${id}`)    
    .pipe(concatMap(()=> this.getAlumnos$()));
  }

}
