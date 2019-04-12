/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild, EventEmitter } from '@angular/core';

import { FormDirectorComponent } from './form-director.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { DirectorMocks } from 'src/app/models/mocks/director-mocks';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormDirectorComponent', () => {

  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  @Component({
    selector: 'app-test-component',
    template: '<app-form-director></app-form-director>'
  })
  class TestComponent {
    @ViewChild(FormDirectorComponent)
    public formDirectorComponent: FormDirectorComponent;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        DirectivesModule,
        FormsModule,
        MaterialModule
      ],
      declarations: [
        FormDirectorComponent,
        TestComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });

  it(`'should show form 'Crear'`, () => {
    testComponent.formDirectorComponent.forCreate = true;
    testComponent.formDirectorComponent.director = {
      id: null, name: '', gender: 'M'
    };
    testComponent.formDirectorComponent.onSubmit = new EventEmitter();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('Crear');
  });

  it(`'should show form 'Editar'`, () => {
    const director = new DirectorMocks().get(1);
    testComponent.formDirectorComponent.forCreate = false;
    testComponent.formDirectorComponent.director = Object.assign({}, director);
    testComponent.formDirectorComponent.onSubmit = new EventEmitter();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input[name="name"]').getAttribute('ng-reflect-model')).toEqual(director.name);
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('Guardar');
  });

});
