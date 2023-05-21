import { TestBed } from '@angular/core/testing';

import { TodoServiceTsService } from './todo.service.ts.service';

describe('TodoServiceTsService', () => {
  let service: TodoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
