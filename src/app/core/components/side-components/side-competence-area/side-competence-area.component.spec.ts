import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCompetenceAreaComponent } from './side-competence-area.component';

describe('SideCompetenceAreaComponent', () => {
  let component: SideCompetenceAreaComponent;
  let fixture: ComponentFixture<SideCompetenceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCompetenceAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCompetenceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
