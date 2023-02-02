import { Injectable, }  from '@angular/core';

import { IEbay } from '../models';
import { props } from '../types';

@Injectable()
export class EbayLocalStorageService {
    storage: IEbay;

    constructor() {
        this.storage = JSON.parse(localStorage.getItem("Ebay")!) || {};
    }

    public get(prop: props): IEbay[props] | null {
        return this.storage[prop] || null;
    }

    public set(prop: props, value: any): void {
        this.storage[prop] = value;

        this.update(this.storage);
    }

    public clear(): void {
        this.storage = {} as IEbay;

        this.update(this.storage);
    }

    private update(storage: IEbay): void {
        localStorage.removeItem("Ebay");

        localStorage.setItem("Ebay", JSON.stringify(storage));
    }
}