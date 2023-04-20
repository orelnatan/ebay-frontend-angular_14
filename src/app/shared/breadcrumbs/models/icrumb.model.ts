
export interface ICrumb {
    path: string;
    name?: string;
    color?: string;
    skip?: boolean;
    parent?: string;
    disabled?: boolean;
}