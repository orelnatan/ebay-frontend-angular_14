import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { ValidationPipe } from '../../pipes';
import { EbErrorStateMatcher } from '../../classes';
import { IValidation } from '../../interfaces';

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html',
    standalone: true,
    imports: [ 
        MatInputModule,
        ReactiveFormsModule,
        ValidationPipe
    ]
})

export class InputText {
    @Input() control: FormControl = new FormControl();
    @Input() value: string;
    @Input() validation: IValidation;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<string> = new EventEmitter();

    matcher: ErrorStateMatcher = new EbErrorStateMatcher();
}