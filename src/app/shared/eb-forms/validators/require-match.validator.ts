import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, AbstractControl, } from '@angular/forms';

@Directive({
  selector: '[requireMatch]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: RequireMatchValidator, multi: true }
  ]
})
export class RequireMatchValidator implements Validator { 
  @Input() origin: string;
  @Input() clone: string;
  
  validate(group: FormGroup): ValidationErrors | null {
    const originControl: AbstractControl = group.controls[this.origin];
    const cloneControl: AbstractControl = group.controls[this.clone];
   
    if(cloneControl?.value) {
      cloneControl.setErrors(originControl?.value == cloneControl?.value ? null : {
        requireMatch: {
          originValue: originControl?.value,
          currentValue: cloneControl?.value
        }
      })
    }
  
    return null;
  }
}


