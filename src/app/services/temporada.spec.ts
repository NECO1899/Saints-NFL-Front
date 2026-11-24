import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { TemporadaService } from './temporada';

  describe('TemporadaService', () => {
    let service: TemporadaService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [provideHttpClient()]
      });
      service = TestBed.inject(TemporadaService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
