import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysMenuComponent } from './todays-menu.component';

describe('TodaysMenuComponent', () => {
  let component: TodaysMenuComponent;
  let fixture: ComponentFixture<TodaysMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
