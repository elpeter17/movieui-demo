/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManageDirectorsDialogComponent } from './manage-directors-dialog.component';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { DirectorsRoutes } from '../directors.routing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ListDirectorsComponent } from '../list-directors/list-directors.component';
import { FormDirectorComponent } from '../form-director/form-director.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

describe('ManageDirectorsDialogComponent', () => {
  let component: ManageDirectorsDialogComponent;
  let fixture: ComponentFixture<ManageDirectorsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        DirectorsRoutes,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        PipesModule
      ],
      declarations: [
        ListDirectorsComponent,
        FormDirectorComponent,
        ManageDirectorsDialogComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDirectorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
