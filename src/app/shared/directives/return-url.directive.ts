import { Directive, HostListener, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
 
@Directive({
  selector: '[returnUrl]',
})
export class ReturnUrlDirective implements OnInit {
    @HostListener("click") onClick(): void {
        this.stateReturnUrl ? this._navigateByStateReturnUrl() : this._navigateByDefaultReturnUrl();
    }

    @Input() defaultReturnUrl: string;

    private stateReturnUrl: string;

    constructor(
      private router: Router
    ) {}

    ngOnInit(): void {
        this.stateReturnUrl = history.state?.['returnUrl'];
    }

    private _navigateByStateReturnUrl(): void {
        this.router.navigateByUrl(this.stateReturnUrl);
    }

    private _navigateByDefaultReturnUrl(): void {
        this.router.navigateByUrl(this.defaultReturnUrl);
    }
}