/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectorService } from './director.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Director', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DirectorService]
    });
  });

  it('should ...', inject([DirectorService], (service: DirectorService) => {
    expect(service).toBeTruthy();
  }));
});
