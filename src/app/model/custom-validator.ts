import { AbstractControl, ValidatorFn } from '@angular/forms';

import { Directive, forwardRef} from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function customValidtorFactory(): ValidatorFn {
  return (c: AbstractControl) => {
    let isValid = c.value
      && c.value.waarde
      && c.value.waarde.length > 0;

    if(isValid) {
        return null;
    } else {
        return {
            customValidator: {
                valid: false,
                message: 'custom valdiator failed to validate the input'
            }
        };
    }
  }
}

@Directive({
  selector: '[customValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: customValidtorFactory(),
      multi: true
    }
  ]
})
export class CustomValidator{


}
