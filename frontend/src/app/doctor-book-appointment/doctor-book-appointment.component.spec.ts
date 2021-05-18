import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBookAppointmentComponent } from './doctor-book-appointment.component';

describe('DoctorBookAppointmentComponent', () => {
  let component: DoctorBookAppointmentComponent;
  let fixture: ComponentFixture<DoctorBookAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorBookAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorBookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
