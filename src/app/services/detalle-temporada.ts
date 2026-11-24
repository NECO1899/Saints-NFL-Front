import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetalleTemporadaService {
  private readonly apiUrl = 'http://localhost:3000/api/detalle-temporada';

  constructor(private http: HttpClient) {}

  getDetalleTemporada(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
