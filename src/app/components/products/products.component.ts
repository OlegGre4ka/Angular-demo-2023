import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsData: IProduct[] = [];
  isLoading = true;
  searchText = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      products => {
        this.productsData = products;
        this.isLoading = false;
        console.log(products, "products")
      }
    )
  }
}
