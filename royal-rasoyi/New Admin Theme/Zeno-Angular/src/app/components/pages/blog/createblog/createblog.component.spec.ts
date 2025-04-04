import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateblogComponent } from './createblog.component';

describe('CreateblogComponent', () => {
  let component: CreateblogComponent;
  let fixture: ComponentFixture<CreateblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
