import { TestBed } from '@angular/core/testing';

import { DoctorMyProfileService } from './doctor-my-profile.service';

describe('DoctorMyProfileService', () => {
  let service: DoctorMyProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorMyProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
