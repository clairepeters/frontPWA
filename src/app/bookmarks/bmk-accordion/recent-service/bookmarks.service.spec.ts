import { TestBed } from '@angular/core/testing';

import { BookmarksService } from './recent.service';

describe('BookmarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarksService = TestBed.get(BookmarksService);
    expect(service).toBeTruthy();
  });
});
