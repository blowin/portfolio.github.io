import { TestBed } from '@angular/core/testing';

import { LinkButtonService } from './link-button.service';

describe('LinkButtonService', () => {
  let service: LinkButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
