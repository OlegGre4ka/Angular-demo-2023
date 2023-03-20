import { IProduct } from "./Product.model";

export interface IProductsData {
  limit: number;
  skip: number;
  total: number;
  products: IProduct[];
}
