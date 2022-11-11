import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFileComponent } from './side-file.component';

describe('SideFileComponent', () => {
  let component: SideFileComponent;
  let fixture: ComponentFixture<SideFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
