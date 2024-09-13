import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { DrawerService } from './drawer.service';

describe('DrawerService', () => {
  let service: DrawerService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawerService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
