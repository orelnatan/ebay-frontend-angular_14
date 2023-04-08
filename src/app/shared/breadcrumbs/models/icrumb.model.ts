
export interface ICrumb {
    path: string;
    pathIndex: number;
    name?: string;
    color?: string;
    disabled?: boolean;
    noSeperator?: boolean;
}