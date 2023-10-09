import { TestBed } from '@angular/core/testing';

import { ListOfTasksService } from './list-of-tasks.service';

describe('ListOfTasksService', () => {
  let service: ListOfTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
