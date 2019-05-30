import { TestBed } from '@angular/core/testing';

import { SqlServiceService } from './sql-service.service';

describe('SqlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqlServiceService = TestBed.get(SqlServiceService);
    expect(service).toBeTruthy();
  });
});
