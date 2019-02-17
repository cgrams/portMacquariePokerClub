import { TestBed } from '@angular/core/testing';

import { NavfunctionService } from './navfunction.service';

describe('NavfunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavfunctionService = TestBed.get(NavfunctionService);
    expect(service).toBeTruthy();
  });
});
