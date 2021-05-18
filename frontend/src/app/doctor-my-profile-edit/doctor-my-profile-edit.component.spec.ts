import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMyProfileEditComponent } from './doctor-my-profile-edit.component';

describe('DoctorMyProfileEditComponent', () => {
  let component: DoctorMyProfileEditComponent;
  let fixture: ComponentFixture<DoctorMyProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMyProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMyProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
