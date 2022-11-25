import { TestBed } from '@angular/core/testing';

import { ArretMaladieService } from './arret-maladie.service';

describe('ArretMaladieService', () => {
  let service: ArretMaladieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArretMaladieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
