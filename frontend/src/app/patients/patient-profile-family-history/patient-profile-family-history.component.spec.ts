import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileFamilyHistoryComponent } from './patient-profile-family-history.component';

describe('PatientProfileFamilyHistoryComponent', () => {
  let component: PatientProfileFamilyHistoryComponent;
  let fixture: ComponentFixture<PatientProfileFamilyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileFamilyHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileFamilyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
