import { TestBed } from '@angular/core/testing';

import { WhiskeyService } from './whiskey.service';

describe('WhiskeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhiskeyService = TestBed.get(WhiskeyService);
    expect(service).toBeTruthy();
  });
});
