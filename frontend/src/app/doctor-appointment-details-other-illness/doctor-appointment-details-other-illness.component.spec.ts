import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentDetailsOtherIllnessComponent } from './doctor-appointment-details-other-illness.component';

describe('DoctorAppointmentDetailsOtherIllnessComponent', () => {
  let component: DoctorAppointmentDetailsOtherIllnessComponent;
  let fixture: ComponentFixture<DoctorAppointmentDetailsOtherIllnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentDetailsOtherIllnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentDetailsOtherIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
