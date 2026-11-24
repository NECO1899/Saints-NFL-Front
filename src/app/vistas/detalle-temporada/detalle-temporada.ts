import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleTemporadaService } from '../../services/detalle-temporada';
import { TableComponent } from '../../table/table';

@Component({
  selector: 'app-detalle-temporada',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './detalle-temporada.html',
  styleUrl: './detalle-temporada.css',
})
export class DetalleTemporada implements OnInit {
  detalles: any[] = [];
  
  constructor(
    private detalleTemporadaService: DetalleTemporadaService,
    
  ) {}

  ngOnInit(): void {
    this.detalleTemporadaService.getDetalleTemporada().subscribe({
      next: (data) => {
        console.log(data)
        this.detalles = data;
        if ( data.length > 0) {
          this.detalles = data;
          
        } 
      },
      error: (err) => console.error('Error al cargar detalle temporada:', err)
    });
  }
}
