import { TestBed } from '@angular/core/testing';

import { DoctorMyProfileEditService } from './doctor-my-profile-edit.service';

describe('DoctorMyProfileEditService', () => {
  let service: DoctorMyProfileEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorMyProfileEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
