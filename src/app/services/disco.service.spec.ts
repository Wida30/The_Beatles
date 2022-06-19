import { TestBed } from '@angular/core/testing';

import { DiscosService } from './disco.service';

describe('DiscoService', () => {
  let service: DiscosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
