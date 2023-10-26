import { IEntity } from "./ientity.interface";

export interface IFamily extends IEntity {
    symbol: string;
    categoryId: number;
}