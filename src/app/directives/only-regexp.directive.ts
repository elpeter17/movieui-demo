import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appOnlyRegexp]',
  providers: [{provide: NG_VALIDATORS, useExisting: OnlyRegexpDirective, multi: true}]
})
export class OnlyRegexpDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appOnlyRegexp') rule: string;

  /** Validar */
  validate(control: AbstractControl) {
    /** Expresión regular */
    let regExp: RegExp;
    switch (this.rule) {
      case 'gender':
        regExp = /^[MF]?$/g;
        break;
      default:
        break;
    }
    // Si se recibió una regla, evaluar si cumple
    return this.rule ? this.regularExpressionValidator(regExp)(control) : null;
  }

  /** Validar si el valor cumple con la expresión regular indicada */
  private regularExpressionValidator(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
      const match = regExp.test(control.value);
      return match ? null : { forbiddenChars: { value: control.value } };
    };
  }

}
