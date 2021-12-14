import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChatWindowComponent } from './patient-chat-window.component';

describe('PatientChatWindowComponent', () => {
  let component: PatientChatWindowComponent;
  let fixture: ComponentFixture<PatientChatWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientChatWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
