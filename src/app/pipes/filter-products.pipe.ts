import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './../models/Product.model'

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], searchText: string): IProduct[] {
    if (searchText.length === 0) return products
    return products.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
  }

}
