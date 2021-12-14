import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentDetailsoperationsSurgeriesComponent } from './doctor-appointment-detailsoperations-surgeries.component';

describe('DoctorAppointmentDetailsoperationsSurgeriesComponent', () => {
  let component: DoctorAppointmentDetailsoperationsSurgeriesComponent;
  let fixture: ComponentFixture<DoctorAppointmentDetailsoperationsSurgeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentDetailsoperationsSurgeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentDetailsoperationsSurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
