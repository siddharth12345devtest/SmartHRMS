import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCssComponent } from './custom-css.component';

describe('CustomCssComponent', () => {
  let component: CustomCssComponent;
  let fixture: ComponentFixture<CustomCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomCssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
