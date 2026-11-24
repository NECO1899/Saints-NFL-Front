import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  Login(loginData: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl, loginData);
  }
}