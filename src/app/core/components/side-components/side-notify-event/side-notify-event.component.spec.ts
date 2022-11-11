import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNotifyEventComponent } from './side-notify-event.component';

describe('SideNotifyEventComponent', () => {
  let component: SideNotifyEventComponent;
  let fixture: ComponentFixture<SideNotifyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNotifyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNotifyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
