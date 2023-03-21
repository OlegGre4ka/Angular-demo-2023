import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {PhotosComponent} from './components/photos/photos.component';
import { ProductDetailedComponent } from './components/products/product-detailed/product-detailed.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'products/:id', component: ProductDetailedComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
