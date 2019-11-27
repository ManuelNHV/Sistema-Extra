import { TestBed } from '@angular/core/testing';

import { OfertaJobService } from './oferta-job.service';

describe('OfertaJobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaJobService = TestBed.get(OfertaJobService);
    expect(service).toBeTruthy();
  });
});
