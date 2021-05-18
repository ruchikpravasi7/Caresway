import { TestBed } from '@angular/core/testing';

import { DoctorCLinicsService } from './doctor-clinics.service';

describe('DoctorCLinicsService', () => {
  let service: DoctorCLinicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorCLinicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
