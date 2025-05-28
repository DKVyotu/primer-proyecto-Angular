import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { Form, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private AuthService: AuthService,
    private FormBuilder: FormBuilder
  ) {
    this.loginForm = this.FormBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  iniciarSession() {
    if (this.loginForm.invalid) {
      alert('Formulario invalido');
    } else {
      const { email, password } = this.loginForm.value;
      const user = this.AuthService.login(email, password);

/*       if (user) {
        this.router.navigate(['/panel']);
      } else {
        alert('Login incorrecto!');
      } */
    }
  }
}
