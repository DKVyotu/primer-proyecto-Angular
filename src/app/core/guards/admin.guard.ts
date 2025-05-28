import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.authuser.pipe(
    map((user) => {
      if (user && user.rol === 'admin') {
        return true;
      } else {
        alert('No tienes permisos para acceder a esta página.');
        return false;
      }
    })
  );

};
