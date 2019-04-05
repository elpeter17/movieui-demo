import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManageDirectorsData } from '../classes/manage-directors-data';
import { DirectorService } from 'src/app/api/director.service';

@Component({
  selector: 'app-manage-directors-dialog',
  templateUrl: './manage-directors-dialog.component.html',
  styleUrls: ['./manage-directors-dialog.component.css']
})
export class ManageDirectorsDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ManageDirectorsData,
    private dialogRef: MatDialogRef<ManageDirectorsDialogComponent>,
    private directorService: DirectorService
  ) {
    this.initDialog();
  }

  private initDialog() {
    if (typeof this.data.director === 'undefined') {
      this.data.director = {
        id: null, name: '', gender: 'M'
      };
    }
  }

  public onSubmit() {
    console.log(this.data.director);
    if (this.data.forCreate) {
      this.save();
    } else {
      this.update();
    }
  }

  private save() {
    this.directorService.create(this.data.director).subscribe(
      response => {
        this.dialogRef.close(true);
      }, error => {
        alert('Error al crear director');
        this.dialogRef.close(false);
      }
    );
  }

  private update() {
    this.directorService.update(this.data.director).subscribe(
      response => {
        this.dialogRef.close(true);
      }, error => {
        alert('Error al actualizar director');
        this.dialogRef.close(false);
      }
    );
  }

}
