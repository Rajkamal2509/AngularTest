import { TestBed } from '@angular/core/testing';

import { AsyncpipeService } from './asyncpipe.service';

describe('AsyncpipeService', () => {
  let service: AsyncpipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncpipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
