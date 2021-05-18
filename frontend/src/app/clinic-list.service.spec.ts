import { TestBed } from '@angular/core/testing';

import { ClinicListService } from './clinic-list.service';

describe('ClinicListService', () => {
  let service: ClinicListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
