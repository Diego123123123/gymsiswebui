import { TestBed } from '@angular/core/testing';

import { FuntionService } from './funtion.service';

describe('FuntionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuntionService = TestBed.get(FuntionService);
    expect(service).toBeTruthy();
  });
});
