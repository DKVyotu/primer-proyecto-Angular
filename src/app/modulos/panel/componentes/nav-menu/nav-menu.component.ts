import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: false,
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
})
export class NavMenuComponent {
  constructor(private router: Router) {}

  cerrarSesion() {
    console.log('cerrando sesion');
    localStorage.removeItem('token');
    this.router.navigate(['/autentificacion/iniciar-sesion']);
  }
}
