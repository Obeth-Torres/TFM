import { TestBed } from '@angular/core/testing';

import { AnalistaService } from './analista.service';

describe('AnalistaService', () => {
  let service: AnalistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
