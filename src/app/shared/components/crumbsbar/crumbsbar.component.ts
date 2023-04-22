import { Component, Input } from '@angular/core';

@Component({
    selector: 'crumbsbar',
    templateUrl: './crumbsbar.component.html',
    styleUrls: ['./crumbsbar.component.scss'],
})
export class CrumbsbarComponent {
    @Input() name: string;

    @Input() uppercase: boolean;
    @Input() lowercase: boolean;
}