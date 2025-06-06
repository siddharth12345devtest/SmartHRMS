import { TestBed } from '@angular/core/testing';
import { DesignationDetailsService } from './designation-details.service';

describe('DesignationDetailsService', () => {
  let service: DesignationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
