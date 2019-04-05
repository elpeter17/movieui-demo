import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: any, args?: any): any {
    const transformed = this.openMatIcon() + this.iconGender(value) + '</mat-icon>';
    return this.sanitizer.bypassSecurityTrustHtml(transformed);
  }

  private iconGender(value: string): string {
    return (String(value) === 'M') ? 'grade' : 'favorite';
  }

  private openMatIcon(): string {
    return '<mat-icon _ngcontent-c3="" class="mat-icon notranslate material-icons mat-icon-no-color" role="img" aria-hidden="true">';
  }

}
