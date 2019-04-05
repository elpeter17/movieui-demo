import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyRegexpDirective } from './only-regexp.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OnlyRegexpDirective
  ],
  exports: [
    OnlyRegexpDirective
  ]
})
export class DirectivesModule { }
