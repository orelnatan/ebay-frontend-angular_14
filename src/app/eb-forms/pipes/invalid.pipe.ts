import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Pipe({
   name: 'invalid',
   pure: false
})
export class InvalidPipe implements PipeTransform {    
    constructor(
        private controlContainer: ControlContainer
    ){}

    transform(control: AbstractControl, matcher: ErrorStateMatcher): boolean {
        return matcher.isErrorState(<FormControl>control, <NgForm>this.controlContainer);
    }
}