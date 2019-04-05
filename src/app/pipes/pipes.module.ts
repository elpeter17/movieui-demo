import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe } from './gender.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GenderPipe
  ],
  exports: [
    GenderPipe
  ]
})
export class PipesModule { }
