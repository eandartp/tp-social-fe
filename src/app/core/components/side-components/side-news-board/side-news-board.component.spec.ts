import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNewsBoardComponent } from './side-news-board.component';

describe('SideNewsBoardComponent', () => {
  let component: SideNewsBoardComponent;
  let fixture: ComponentFixture<SideNewsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNewsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNewsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
