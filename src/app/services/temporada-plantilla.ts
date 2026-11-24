import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemporadaPlantillaService {
  private readonly apiUrl = 'http://localhost:3000/api/temporada-plantilla';

  constructor(private http: HttpClient) {}

  getTemporadaPlantilla(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
