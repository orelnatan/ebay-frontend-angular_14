import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { BaseErrorStateMatcher } from '../classes';

@Directive({
  selector: '[errorState]',
})
export class ErrorStateDirective implements AfterViewChecked {
  @Input('errorState') control: AbstractControl;
  
  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
  
  constructor(
    private readonly elementRef: ElementRef,
    private readonly controlContainer: ControlContainer
  ) {}

  ngAfterViewChecked(): void {
    if(this.matcher.isErrorState(<FormControl>this.control, <NgForm>this.controlContainer)) {
      this.elementRef.nativeElement.classList.add('input-error-state');
    } else {
      this.elementRef.nativeElement.classList.remove('input-error-state');
    }
  }
}