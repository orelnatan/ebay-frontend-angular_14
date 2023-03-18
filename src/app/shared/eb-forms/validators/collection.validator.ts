import { Directive, Input, } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, } from '@angular/forms';

@Directive({
    selector: '[collection][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: CollectionValidator, multi: true }
    ]
})

export class CollectionValidator implements Validator { 
    @Input() minItems: number;
    @Input() maxItems: number;

    validate(control: FormControl): ValidationErrors | null {
        return null;
    }
}