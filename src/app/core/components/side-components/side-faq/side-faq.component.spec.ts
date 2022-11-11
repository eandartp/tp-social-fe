import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFaqComponent } from './side-faq.component';

describe('SideFaqComponent', () => {
  let component: SideFaqComponent;
  let fixture: ComponentFixture<SideFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
