
export interface ICrumb {
    id: number;
    path: string;
    route: string;
    name?: string;
    color?: string;
    skip?: boolean;
    parent?: string;
    disabled?: boolean;
    async?: Promise<ICrumb>;
}
