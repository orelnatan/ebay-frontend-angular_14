
export interface ICrumb {
  id: number;
  path: string;
  name?: string;
  image?: string; 
  color?: string;
  skip?: boolean;
  disabled?: boolean;
  resolve?: string;
  async?: Promise<ICrumb>;
}
