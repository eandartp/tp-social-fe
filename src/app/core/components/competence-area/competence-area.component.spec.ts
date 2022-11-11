import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceAreaComponent } from './competence-area.component';

describe('CompetenceAreaComponent', () => {
  let component: CompetenceAreaComponent;
  let fixture: ComponentFixture<CompetenceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
