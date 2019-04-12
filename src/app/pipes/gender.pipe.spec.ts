/* tslint:disable:no-unused-variable */

import { GenderPipe } from './gender.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('Pipe: Gender', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new GenderPipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));
});
