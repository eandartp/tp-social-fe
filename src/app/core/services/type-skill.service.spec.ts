import { TestBed } from '@angular/core/testing';

import { TypeSkillService } from './type-skill.service';

describe('TypeSkillService', () => {
  let service: TypeSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
