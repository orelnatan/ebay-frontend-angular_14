import { IEntity } from "./ientity.interface";

export interface ICategory extends IEntity {
  rank: number;
  brandId: number;
}