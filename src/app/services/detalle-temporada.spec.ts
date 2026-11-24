import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { DetalleTemporadaService } from './detalle-temporada';

describe('DetalleTemporadaService', () => {
  let service: DetalleTemporadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(DetalleTemporadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
