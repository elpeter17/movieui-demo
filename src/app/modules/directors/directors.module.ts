import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDirectorsComponent } from './list-directors/list-directors.component';
import { DirectorsRoutes } from './directors.routing';
import { MaterialModule } from '../material.module';
import { ManageDirectorsDialogComponent } from './manage-directors-dialog/manage-directors-dialog.component';
import { FormDirectorComponent } from './form-director/form-director.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DirectivesModule,
    DirectorsRoutes
  ],
  declarations: [
    ListDirectorsComponent,
    ManageDirectorsDialogComponent,
    FormDirectorComponent
  ],
  entryComponents: [
    ManageDirectorsDialogComponent
  ]
})
export class DirectorsModule { }
