import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SideJobSystemComponent} from './side-job-system.component';

describe('SideJobSystemComponent', () => {
  let component: SideJobSystemComponent;
  let fixture: ComponentFixture<SideJobSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideJobSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideJobSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
