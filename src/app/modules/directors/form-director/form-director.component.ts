import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Director } from 'src/app/models/director.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-director',
  templateUrl: './form-director.component.html',
  styleUrls: ['./form-director.component.css']
})
export class FormDirectorComponent {

  @Input() forCreate: boolean;
  @Input() director: Director;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  @ViewChild('formDirector') formDirector: NgForm;

  constructor() { }

  public submit() {
    if (this.formDirector.valid) {
      this.onSubmit.emit();
    }
  }

}
