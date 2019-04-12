/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListDirectorsComponent } from './list-directors.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MaterialModule } from '../../material.module';
import { DirectorService } from 'src/app/api/director.service';
import { HttpClientModule } from '@angular/common/http';
import { DirectorsRoutes } from '../directors.routing';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListDirectorsComponent', () => {
  let component: ListDirectorsComponent;
  let fixture: ComponentFixture<ListDirectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        DirectorsRoutes,
        HttpClientModule,
        MaterialModule,
        PipesModule
      ],
      declarations: [ ListDirectorsComponent ],
      providers: [
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
