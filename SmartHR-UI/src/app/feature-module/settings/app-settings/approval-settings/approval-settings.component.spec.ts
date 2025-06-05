import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSettingsComponent } from './approval-settings.component';

describe('ApprovalSettingsComponent', () => {
  let component: ApprovalSettingsComponent;
  let fixture: ComponentFixture<ApprovalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
