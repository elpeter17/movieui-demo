/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovieComponent } from './form-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, ViewChild, EventEmitter } from '@angular/core';
import { DirectorMocks } from 'src/app/models/mocks/director-mocks';
import { MovieMocks } from 'src/app/models/mocks/movie-mocks';

describe('FormMovieComponent', () => {
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  @Component({
    selector: 'app-test-component',
    template: '<app-form-movie></app-form-movie>'
  })
  class TestComponent {
    @ViewChild(FormMovieComponent) public formMovie: FormMovieComponent;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        FormMovieComponent,
        TestComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });

  it(`should create from 'Editar'`, () => {
    const movie = new MovieMocks(new DirectorMocks()).get(1);
    testComponent.formMovie.forCreate = false;
    testComponent.formMovie.movie = Object.assign({}, movie);
    testComponent.formMovie.directors = new DirectorMocks().index();
    testComponent.formMovie.onSaveMovie = new EventEmitter();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input[formControlName="title"]').value).toEqual(movie.title);
  });
});
