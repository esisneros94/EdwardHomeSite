import { TestBed } from '@angular/core/testing';

import { DistilleryService } from './distillery.service';

describe('DistilleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistilleryService = TestBed.get(DistilleryService);
    expect(service).toBeTruthy();
  });
});
