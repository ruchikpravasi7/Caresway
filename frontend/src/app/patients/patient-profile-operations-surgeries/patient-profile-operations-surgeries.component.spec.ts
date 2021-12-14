import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileOperationsSurgeriesComponent } from './patient-profile-operations-surgeries.component';

describe('PatientProfileOperationsSurgeriesComponent', () => {
  let component: PatientProfileOperationsSurgeriesComponent;
  let fixture: ComponentFixture<PatientProfileOperationsSurgeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileOperationsSurgeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileOperationsSurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
