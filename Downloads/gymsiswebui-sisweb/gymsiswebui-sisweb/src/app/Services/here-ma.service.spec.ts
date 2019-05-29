import { TestBed } from '@angular/core/testing';

import { HereMaService } from './here-ma.service';

describe('HereMaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HereMaService = TestBed.get(HereMaService);
    expect(service).toBeTruthy();
  });
});
