import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSideDrawerComponent } from './cart-side-drawer.component';

describe('CartSideDrawerComponent', () => {
  let component: CartSideDrawerComponent;
  let fixture: ComponentFixture<CartSideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSideDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
