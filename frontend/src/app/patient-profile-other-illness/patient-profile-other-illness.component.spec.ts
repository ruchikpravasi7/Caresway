import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileOtherIllnessComponent } from './patient-profile-other-illness.component';

describe('PatientProfileOtherIllnessComponent', () => {
  let component: PatientProfileOtherIllnessComponent;
  let fixture: ComponentFixture<PatientProfileOtherIllnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileOtherIllnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileOtherIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
