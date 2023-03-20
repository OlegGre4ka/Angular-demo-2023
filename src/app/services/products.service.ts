import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../models/Product.model';
import { IProductsData } from "../models/IProductsData";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProductsData>('https://dummyjson.com/products',
    {params: new HttpParams().append("limit", 20)})
      .pipe(map(data => {

        let products: IProduct[] = data.products;

        return products;
      }))
  }

  getDetailedProduct(id:string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`)
  }
}
