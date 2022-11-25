import { TestBed } from '@angular/core/testing';

import { StatutDocumentService } from './statut-document.service';

describe('StatutDocumentService', () => {
  let service: StatutDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatutDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
