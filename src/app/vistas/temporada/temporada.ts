import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporadaService } from '../../services/temporada';
import { TableComponent } from '../../table/table';

@Component({
  selector: 'app-temporada',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './temporada.html',
  styleUrl: './temporada.css',
})
export class Temporada implements OnInit {
  temporada: any[] = [];


  constructor(
    private temporadaService: TemporadaService,
  ) {}

  ngOnInit(): void {
    console.log('TEMPORADA CARGADA');

    this.temporadaService.getTemporada().subscribe({
      next: (data) => {
        console.log('DATOS RECIBIDOS:', data);
        if ( data.length > 0) {
          this.temporada = data;
         console.log("ENTREEEE", this.temporada)
        } 
      },
      error: (err) => console.error('Error al cargar temporada:', err)

    });
  }
}
