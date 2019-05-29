import { TestBed } from '@angular/core/testing';

import { XrpDonationsService } from './xrp-donations.service';

describe('XrpDonationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XrpDonationsService = TestBed.get(XrpDonationsService);
    expect(service).toBeTruthy();
  });
});
