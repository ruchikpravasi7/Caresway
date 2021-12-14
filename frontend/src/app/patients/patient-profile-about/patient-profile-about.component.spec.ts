import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileAboutComponent } from './patient-profile-about.component';

describe('PatientProfileAboutComponent', () => {
  let component: PatientProfileAboutComponent;
  let fixture: ComponentFixture<PatientProfileAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
