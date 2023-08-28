import { TestBed } from '@angular/core/testing';

import { MetrialService } from './metrial.service';

describe('MetrialService', () => {
  let service: MetrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
