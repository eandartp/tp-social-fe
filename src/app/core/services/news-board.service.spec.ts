import {TestBed} from '@angular/core/testing';

import {NewsBoardService} from './news-board.service';

describe('NewsBoardService', () => {
  let service: NewsBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
