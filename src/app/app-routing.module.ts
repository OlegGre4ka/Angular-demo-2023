import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {PhotosComponent} from './components/photos/photos.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'products', component: ProductComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
