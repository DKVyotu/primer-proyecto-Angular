import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

  constructor(private router :Router ) { }

  iniciarSession() {
    console.log('Iniciando sesión');
    localStorage.setItem('token', 'token de prueba');
    this.router.navigate(['panel']);
  }

  
}
