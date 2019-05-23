import { TestBed } from '@angular/core/testing';

import { KestrellService } from './kestrell.service';

describe('KestrellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KestrellService = TestBed.get(KestrellService);
    expect(service).toBeTruthy();
  });
});
