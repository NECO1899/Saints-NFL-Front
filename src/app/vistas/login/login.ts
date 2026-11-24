import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatIconModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatCardModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginForm!: FormGroup;

  errorMensaje = '';
  cargando = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ingresar(): void {

    this.errorMensaje = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.errorMensaje =
        'Por favor ingresa usuario y contraseña.';
      return;
    }

    this.cargando = true;

    this.authService
      .login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          this.cargando = false;

          console.log('Login exitoso:', res);

          this.router.navigate(['/menu']);
        },
        error: (err) => {
          this.cargando = false;

          console.error('Error en login:', err);

          if (err.error && err.error.message) {
            this.errorMensaje = err.error.message;
          } else {
            this.errorMensaje =
              'Usuario o contraseña incorrectos.';
          }
        }
      });
  }
}
