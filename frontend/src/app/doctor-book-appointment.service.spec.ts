import { TestBed } from '@angular/core/testing';

import { DoctorBookAppointmentService } from './doctor-book-appointment.service';

describe('DoctorBookAppointmentService', () => {
  let service: DoctorBookAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorBookAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
