import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentPrescriptionComponent } from './patient-appointment-prescription.component';

describe('PatientAppointmentPrescriptionComponent', () => {
  let component: PatientAppointmentPrescriptionComponent;
  let fixture: ComponentFixture<PatientAppointmentPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppointmentPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppointmentPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
