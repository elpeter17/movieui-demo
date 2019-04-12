/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditMovieComponent } from './edit-movie.component';
import { CreateMovieComponent } from '../create-movie/create-movie.component';
import { MoviesComponent } from '../movies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesRoutes } from '../movies.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormMovieComponent } from '../form-movie/form-movie.component';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MovieMocks } from 'src/app/models/mocks/movie-mocks';
import { DirectorMocks } from 'src/app/models/mocks/director-mocks';

describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;

  beforeEach(async(() => {
    const movie = new MovieMocks(new DirectorMocks()).get(1);
    const routerWithMovie = {
      events: of('/'),
      getCurrentNavigation: () => {
        return {
          extras: { state: { movieToEdit: movie } }
        };
      }
    };
    const activatedRouteStub = {
      params: of({id: 1})
    };
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MoviesRoutes,
        ReactiveFormsModule
      ],
      declarations: [
        MoviesComponent,
        CreateMovieComponent,
        EditMovieComponent,
        FormMovieComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerWithMovie }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
