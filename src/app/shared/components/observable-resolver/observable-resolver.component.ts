import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'observable-resolver',
  template: `
    <ng-content></ng-content>
  `,
  standalone: true,
})
export class ObservableResolverComponent<T> implements OnChanges {
    @Input() observable: Observable<T | HttpErrorResponse>;

    @Output() resolved: EventEmitter<T> = new EventEmitter();
    @Output() failed: EventEmitter<HttpErrorResponse> = new EventEmitter();
    @Output() start: EventEmitter<void> = new EventEmitter();
    @Output() done: EventEmitter<void> = new EventEmitter();

    public inProcess: boolean;

    ngOnChanges(): void {
        if(this.observable instanceof Observable) {
            this.inProcess = true;

            this.start.emit();
            this.observable.pipe(
                finalize(() => { 
                    this.inProcess = false;
                    
                    this.done.emit();
                })
            ).subscribe({
                next: (response: T | HttpErrorResponse): void => {
                    this.resolved.emit(response as T);
                },
                error: (error: HttpErrorResponse): void => {
                    this.failed.emit(error);
                },
            })
        }
    }
}
