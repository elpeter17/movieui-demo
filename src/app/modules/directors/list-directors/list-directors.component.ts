import { Component, OnInit, ViewChild } from '@angular/core';
import { Director } from 'src/app/models/director.model';
import { DirectorService } from 'src/app/api/director.service';
import { Router } from '@angular/router';
import { directorPaths } from 'src/app/utils/front-paths';
import { MatTableDataSource, MatPaginator, MatSort, TransitionCheckState, MatDialog, MatDialogRef } from '@angular/material';
import { DirectorMocks } from 'src/app/models/mocks/director-mocks';
import { ManageDirectorsDialogComponent } from '../manage-directors-dialog/manage-directors-dialog.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-directors',
  templateUrl: './list-directors.component.html',
  styleUrls: ['./list-directors.component.css']
})
export class ListDirectorsComponent {

  public directors: Director[];

  public srcListDirectors: MatTableDataSource<Director>;

  public displayedColumns = ['name', 'gender', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private directorService: DirectorService,
    private directorMocks: DirectorMocks,
    private matDialog: MatDialog,
    private router: Router
  ) {
    this.initComponent();
  }

  private initComponent() {
    this.directorService.index().subscribe(
      response => {
        this.directors = response;
        this.initTable();
      }, error => {
        this.directors = this.directorMocks.index();
        this.initTable();
        console.log(error);
      }
    );
  }

  private initTable() {
    this.srcListDirectors = new MatTableDataSource(this.directors);
    this.srcListDirectors.paginator = this.paginator;
    this.srcListDirectors.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.srcListDirectors.filter = filterValue.trim().toLowerCase();

    if (this.srcListDirectors.paginator) {
      this.srcListDirectors.paginator.firstPage();
    }
  }

  public addDirector() {
    const dialogRef = this.matDialog.open(ManageDirectorsDialogComponent, {
      width: '50%', data: {
        forCreate: true
      }
    });
    this.updateListOnCloseDialog(dialogRef);
  }

  public editDirector(director: Director) {
    const dialogRef = this.matDialog.open(ManageDirectorsDialogComponent, {
      width: '50%', data: {
        forCreate: false, director: Object.assign({}, director)
      }
    });
    this.updateListOnCloseDialog(dialogRef);
  }

  private updateListOnCloseDialog(dialogRef: MatDialogRef<ManageDirectorsDialogComponent>) {
    dialogRef.afterClosed().subscribe(updatedList => {
      if (updatedList) {
        this.initComponent();
      }
    });
  }

  public deleteDirector(director: Director) {

  }


}
