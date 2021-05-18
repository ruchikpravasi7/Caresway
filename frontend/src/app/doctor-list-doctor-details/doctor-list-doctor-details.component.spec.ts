import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListDoctorDetailsComponent } from './doctor-list-doctor-details.component';

describe('DoctorListDoctorDetailsComponent', () => {
  let component: DoctorListDoctorDetailsComponent;
  let fixture: ComponentFixture<DoctorListDoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorListDoctorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
