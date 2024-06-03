import { TestBed } from '@angular/core/testing';

import { FournisseurrService } from './fournisseurr.service';

describe('FournisseurService', () => {
  let service: FournisseurrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FournisseurrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
