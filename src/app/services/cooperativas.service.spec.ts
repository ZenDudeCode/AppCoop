import { TestBed } from '@angular/core/testing';

import { CooperativasService } from './cooperativas.service';

describe('CooperativasService', () => {
  let service: CooperativasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperativasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
