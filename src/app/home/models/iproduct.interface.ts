import { IEntity } from "./ientity.interface";

export interface IProduct extends IEntity {
  height: number;
  width: number;
  weight: number;
  added: string;
  price: number;
  familyId: number;
}