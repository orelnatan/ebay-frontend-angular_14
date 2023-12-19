import { Domain } from "./domain.enum";
import { UserType } from "./user-type.enum";

export interface IRegistration {
  name: string;
  avatar: string;
  password: string;
  repassword: string;
  description: string;
  email: string;
  phone: number;
  type: UserType;
  company: string;
  address: string;
  domains: Domain[];
  accept: boolean;
}