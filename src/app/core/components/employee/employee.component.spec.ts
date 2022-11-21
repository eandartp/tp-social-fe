import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JobSystemComponent} from './employee.component';

describe('JobSystemComponent', () => {
  let component: JobSystemComponent;
  let fixture: ComponentFixture<JobSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
