import { Injectable } from '@angular/core';
import { USER } from '../models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _authuser = new BehaviorSubject<USER | null>(null);

  authuser: Observable<USER | null> = this._authuser.asObservable();
  

  constructor(private http: HttpClient, private router: Router) {}
 

  login(email: string, password: string): void {
    this.http
      .get<USER[]>(
        `http://localhost:3000/usuarios?email=${email}&password=${password}`
      )
      .subscribe({
        next: (response) => {
          console.log('response', response);

          const user = response[0];

          if (user) {
            localStorage.setItem('token', user.token);
            console.log('Usuario : ', user);
            this.router.navigate(['/panel']);
            this._authuser.next(user);
          } else {
            alert('Login incorrecto!');
          }
        },
      });
  }

  logout() {
    localStorage.removeItem('token');
    this._authuser.next(null);
  }

  verifyToken(): Observable<USER | boolean> {
    const storedToken = localStorage.getItem('token');

    return this.http
      .get<USER[]>(`http://localhost:3000/usuarios?token=${storedToken}`)
      .pipe(
        map((response) => {
          const user = response[0];
          if (user) {
            localStorage.setItem('token', user.token);
            this._authuser.next(user);
            return user;
          } else {
            return false;
          }
        })
      );
  }
}
