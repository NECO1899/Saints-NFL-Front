import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemporadaService {
  private readonly apiUrl = 'http://localhost:3000/api/temporada';

  constructor(private http: HttpClient) {}

  getTemporada(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
