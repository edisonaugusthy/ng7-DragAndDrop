import { TestBed } from '@angular/core/testing';

import { DragMeService } from './drag-me.service';

describe('DragMeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragMeService = TestBed.get(DragMeService);
    expect(service).toBeTruthy();
  });
});
