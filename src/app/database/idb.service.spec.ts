import { TestBed } from '@angular/core/testing';

import { IdbService } from './idb.service';

// this is code to create a local database, but it is not currently being used 
describe('IdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdbService = TestBed.get(IdbService);
    expect(service).toBeTruthy();
  });
});
