/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormMovieService } from './form-movie.service';

describe('Service: FormMovie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormMovieService]
    });
  });

  it('should ...', inject([FormMovieService], (service: FormMovieService) => {
    expect(service).toBeTruthy();
  }));
});
