import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() product: IProduct;

  constructor(private router: Router) { 
  }
  ngOnInit(): void {
    console.log(this.product, "product")
  }

  openDetailedProduct(productId: number) {
    this.router.navigate(['/products',productId])
  }
}
