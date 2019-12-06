import { TestBed } from '@angular/core/testing';

import { Test700Service } from './test700.service';

describe('Test700Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test700Service = TestBed.get(Test700Service);
    expect(service).toBeTruthy();
  });
});
