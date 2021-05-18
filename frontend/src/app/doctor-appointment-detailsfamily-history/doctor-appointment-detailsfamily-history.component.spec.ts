import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentDetailsfamilyHistoryComponent } from './doctor-appointment-detailsfamily-history.component';

describe('DoctorAppointmentDetailsfamilyHistoryComponent', () => {
  let component: DoctorAppointmentDetailsfamilyHistoryComponent;
  let fixture: ComponentFixture<DoctorAppointmentDetailsfamilyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentDetailsfamilyHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentDetailsfamilyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
