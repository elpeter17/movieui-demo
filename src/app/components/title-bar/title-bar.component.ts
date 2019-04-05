import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moviesPaths, directorPaths } from 'src/app/utils/front-paths';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {

  constructor(
    private router: Router
  ) { }

  public goToMovies() {
    this.router.navigate([moviesPaths.movies]);
  }

  public goToDirectors() {
    this.router.navigate([directorPaths.directors]);
  }


}
