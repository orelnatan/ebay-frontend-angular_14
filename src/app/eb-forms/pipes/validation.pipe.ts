import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { IValidation } from '../interfaces';

@Pipe({
   name: 'validation',
   standalone: true
})
export class ValidationPipe implements PipeTransform {
    transform(validation: IValidation = {}, errors: Record<string, ValidationErrors>): string {
        if(!errors) return validation.default!;
        
        const firstErrorFieldName: keyof IValidation = Object.keys(errors)[0] as keyof typeof validation;

        return validation[firstErrorFieldName] || validation.default!;
    }
}