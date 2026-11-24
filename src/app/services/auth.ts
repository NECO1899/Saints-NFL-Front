import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Usuario {
  id: number;
  usuario: string;
  nombre: string;
  rol?: string;
}

export interface LoginResponse {
  message: string;
  usuario: Usuario;
}

export interface CredencialesLogin {
  usuario: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000/api/auth';

  usuarioActual = signal<Usuario | null>(this.obtenerUsuarioAlmacenado());

  constructor(private http: HttpClient) {}

  login(credenciales: CredencialesLogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}`, credenciales).pipe(
      tap((res) => {
        if (res && res.usuario) {
          this.guardarSesion(res.usuario);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('usuario');
    this.usuarioActual.set(null);
  }

  estaAutenticado(): boolean {
    return this.usuarioActual() !== null;
  }

  private guardarSesion(usuario: Usuario): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuarioActual.set(usuario);
  }

  private obtenerUsuarioAlmacenado(): Usuario | null {
    const data = localStorage.getItem('usuario');
    try {
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }
}
