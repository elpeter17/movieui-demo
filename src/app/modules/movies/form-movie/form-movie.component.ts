import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMovieService } from '../services/form-movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  @Input() movie: Movie;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSaveMovie: EventEmitter<Movie> = new EventEmitter();

  constructor(
    private service: FormMovieService
  ) { }

  ngOnInit() {
    this.service.initForm(this.movie);
  }

  public getForm(): FormGroup {
    return this.service.form;
  }

  public saveMovie() {
    this.onSaveMovie.emit(this.getForm().value);
  }

}
