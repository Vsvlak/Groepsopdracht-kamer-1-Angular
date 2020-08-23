import { TestBed } from '@angular/core/testing';

import { LeerlingService } from './leerling.service';

describe('LeerlingService', () => {
  let service: LeerlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
