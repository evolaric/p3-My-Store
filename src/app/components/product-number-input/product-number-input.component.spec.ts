import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNumberInputComponent } from './product-number-input.component';

describe('ProductNumberInputComponent', () => {
  let component: ProductNumberInputComponent;
  let fixture: ComponentFixture<ProductNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
