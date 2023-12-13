import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormControl } from '@angular/forms';

@Directive({
  selector: '[collection]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CollectionValidator, multi: true }
  ]
})
export class CollectionValidator implements Validator { 
  @Input() minItems: number = 0;
  @Input() maxItems: number = Infinity;
  
  validate(control: FormControl): ValidationErrors | null {
    if(!control.value?.length) return null;
  
    if(control.value.length < this.minItems) {
      return { minItems: {
        minItemsRequired: this.minItems,
        currentItems: control.value.length
      }}
    } else if(control.value.length > this.maxItems) {
      return { maxItems: {
        maxItemsRequired: this.maxItems,
        currentItems: control.value.length
      }}
    }

    return null;
  }
}


