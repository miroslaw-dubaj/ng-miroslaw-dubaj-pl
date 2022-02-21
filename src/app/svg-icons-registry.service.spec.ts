import { TestBed } from '@angular/core/testing';

import { SvgIconsRegistryService } from './svg-icons-registry.service';

describe('SvgIconsRegistryService', () => {
  let service: SvgIconsRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgIconsRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
