import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MaterialModule } from '../modules/material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    TitleBarComponent,
    ConfirmationDialogComponent
  ],
  exports: [
    TitleBarComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class ComponentsModule { }
