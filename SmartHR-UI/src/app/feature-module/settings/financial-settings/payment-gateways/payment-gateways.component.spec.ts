import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewaysComponent } from './payment-gateways.component';

describe('PaymentGatewaysComponent', () => {
  let component: PaymentGatewaysComponent;
  let fixture: ComponentFixture<PaymentGatewaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentGatewaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentGatewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
