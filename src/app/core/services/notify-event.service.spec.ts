import {TestBed} from '@angular/core/testing';

import {NotifyEventService} from './notify-event.service';

describe('NotifyEventService', () => {
  let service: NotifyEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
