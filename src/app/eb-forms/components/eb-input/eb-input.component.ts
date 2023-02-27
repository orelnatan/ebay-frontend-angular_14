import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { EbErrorStateMatcher } from '@ebay/eb-forms/classes';
import { IValidation } from '@ebay/eb-forms/models';

@Component({
    selector: 'eb-input',
    template: ``,
})

export class EbInputComponent {
    @Input() control: AbstractControl;
    @Input() validation: IValidation;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;

    matcher: ErrorStateMatcher = new EbErrorStateMatcher();
}