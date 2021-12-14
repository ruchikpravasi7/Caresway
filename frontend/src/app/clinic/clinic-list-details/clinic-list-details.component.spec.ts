import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicListDetailsComponent } from './clinic-list-details.component';

describe('ClinicListDetailsComponent', () => {
  let component: ClinicListDetailsComponent;
  let fixture: ComponentFixture<ClinicListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
