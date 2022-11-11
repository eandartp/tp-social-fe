import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCourseComponent } from './side-course.component';

describe('SideCourseComponent', () => {
  let component: SideCourseComponent;
  let fixture: ComponentFixture<SideCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
