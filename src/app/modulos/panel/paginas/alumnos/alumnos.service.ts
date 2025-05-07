
import { Injectable } from '@angular/core';
import { Alumno } from './modelos';
import { Observable, of, map } from 'rxjs';

const FalsaAPI: Alumno [] = [
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

@Injectable( {providedIn: 'root'} )
export class AlumnosService {

    getAlumnos(): Promise<Alumno []> {
        console.log('info desde la API');
        /* Asicrono */

        const promesa = new Promise<Alumno[]>((resolve, reject) => {
            setTimeout(() => {
                reject('Es falsa API, no existe');
                /* resolve(FalsaAPI); */
            }, 2000); 
        });

        return promesa;
    }

    getAlumnos$() : Observable <Alumno[]> {
        const alumnosObservable =  new Observable<Alumno[]>((observer) => {

            /* NO termina hasta que pongas el observer.complete */
            setTimeout(() => {
                observer.next(FalsaAPI)
                /* observer.error('Es falsa API, no existe'); */
                observer.complete();
            }, 1000);

        })
        return alumnosObservable;
    }

    getAlumnoId(id: number): Observable<Alumno | null> {
        return of ([...FalsaAPI]).pipe(
        map((alumnos) => alumnos.find((alumno) => alumno.id == id) || null),
        )
    }
}