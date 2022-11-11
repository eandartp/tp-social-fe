import {TestBed} from '@angular/core/testing';

import {JobSystemService} from './job-system.service';

describe('JobSystemService', () => {
  let service: JobSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
