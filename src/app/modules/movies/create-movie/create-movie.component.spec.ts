/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateMovieComponent } from './create-movie.component';
import { FormMovieComponent } from '../form-movie/form-movie.component';
import { MoviesRoutes } from '../movies.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from '../movies.component';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('CreateMovieComponent', () => {
  let component: CreateMovieComponent;
  let fixture: ComponentFixture<CreateMovieComponent>;

  beforeEach(async(() => {
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
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
