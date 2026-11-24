import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { TemporadaPlantillaService } from './temporada-plantilla';

describe('TemporadaPlantillaService', () => {
  let service: TemporadaPlantillaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(TemporadaPlantillaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
