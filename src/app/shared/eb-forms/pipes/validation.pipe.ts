import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { IValidation } from '../models';

@Pipe({
   name: 'validation',
})
export class ValidationPipe implements PipeTransform {
  transform(validation: IValidation = {}, errors: Record<string, ValidationErrors>): string {    
    return errors ? validation[
      Object.keys(errors)[0] as keyof typeof validation
    ] || validation.default! : validation.default!;
  }
}