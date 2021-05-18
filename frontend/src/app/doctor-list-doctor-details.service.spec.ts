import { TestBed } from '@angular/core/testing';

import { DoctorListDoctorDetailsService } from './doctor-list-doctor-details.service';

describe('DoctorListDoctorDetailsService', () => {
  let service: DoctorListDoctorDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorListDoctorDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
