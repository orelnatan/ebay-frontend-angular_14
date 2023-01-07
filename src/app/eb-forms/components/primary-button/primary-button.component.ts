import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'primary-button',
    templateUrl: './primary-button.component.html',
    styleUrls: ['./primary-button.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatProgressBarModule,
        MatInputModule
    ]
})

export class PrimaryButton {
    @Input() dosubmit: boolean;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() pending: boolean;
    @Input() readonly: boolean;

    @Output() onclick: EventEmitter<MouseEvent> = new EventEmitter();
}