
export interface ICrumb {
    id: number;
    path: string;
    name?: string;
    image?: string; 
    color?: string;
    skip?: boolean;
    parent?: string;
    disabled?: boolean;
    resolve?: string;
    async?: Promise<ICrumb>;
}
