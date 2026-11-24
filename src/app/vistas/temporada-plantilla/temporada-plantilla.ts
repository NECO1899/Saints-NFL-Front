import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporadaPlantillaService } from '../../services/temporada-plantilla';
import { TableComponent } from '../../table/table';

@Component({
  selector: 'app-temporada-plantilla',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './temporada-plantilla.html',
  styleUrl: './temporada-plantilla.css',
})
export class TemporadaPlantilla implements OnInit {
  plantillas: any[] = [];

  constructor(
    private temporadaPlantillaService: TemporadaPlantillaService,

  ) {}

  ngOnInit(): void {
    console.log('ENTRÓ A TEMPORADA PLANTILLA');
    this.temporadaPlantillaService.getTemporadaPlantilla().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          console.log('Temporada plantilla cargada:', data);
          this.plantillas =data ;
        } else {
          this.plantillas = [];
        }
      },
      error: (err) => console.error('Error al cargar temporada plantilla:', err)
    });
  }
}
