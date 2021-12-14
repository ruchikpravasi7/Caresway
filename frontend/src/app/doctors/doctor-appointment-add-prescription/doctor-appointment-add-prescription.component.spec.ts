import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentAddPrescriptionComponent } from './doctor-appointment-add-prescription.component';

describe('DoctorAppointmentAddPrescriptionComponent', () => {
  let component: DoctorAppointmentAddPrescriptionComponent;
  let fixture: ComponentFixture<DoctorAppointmentAddPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentAddPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentAddPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
