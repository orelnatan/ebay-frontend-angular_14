import { Data, Params } from "@angular/router";

export interface ICrumb {
    path: string;
    route: string;
    params: Params;
    data?: Data
    id?: string;
    name?: string;
    color?: string;
    skip?: boolean;
    parent?: string;
    disabled?: boolean;
}
