import { TestBed } from '@angular/core/testing';

import { HandlerActiveFormService } from './handler-active-form.service';

describe('HandlerActiveFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlerActiveFormService = TestBed.get(HandlerActiveFormService);
    expect(service).toBeTruthy();
  });
});
