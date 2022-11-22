import { TestBed } from '@angular/core/testing';

import { SubroutesService } from './subroutes.service';

describe('SubroutesService', () => {
  let service: SubroutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubroutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
