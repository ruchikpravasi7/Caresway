import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMyProfileComponent } from './doctor-my-profile.component';

describe('DoctorMyProfileComponent', () => {
  let component: DoctorMyProfileComponent;
  let fixture: ComponentFixture<DoctorMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
