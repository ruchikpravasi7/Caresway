import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorClinicAddComponent } from './doctor-clinic-add.component';

describe('DoctorClinicAddComponent', () => {
  let component: DoctorClinicAddComponent;
  let fixture: ComponentFixture<DoctorClinicAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorClinicAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorClinicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
