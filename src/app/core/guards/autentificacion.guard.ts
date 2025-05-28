import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const autentificacionGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const authService = inject(AuthService);

  console.log('autentificacionGuard esta activado');

  return authService.verifyToken()
    .pipe(
      map((response) => {
        if (response) {
          return true;
        } else {
          router.navigate(['/autentificacion']);
          return false;
        }
      })
    );
};
