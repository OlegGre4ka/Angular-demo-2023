import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapArrowLeft } from '@ng-icons/bootstrap-icons';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/product/product.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './shared/button/button.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PhotoComponent } from './components/photos/photo/photo.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailedComponent } from './components/products/product-detailed/product-detailed.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { LoaderComponent } from './shared/loader/loader.component';
import { FirstCapitalizeLetterPipe } from './pipes/first-capitalize-letter.pipe';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoComponent,
    ProductsComponent,
    ProductComponent,
    ButtonComponent,
    NavigationComponent,
    ProductDetailedComponent,
    FilterProductsPipe,
    LoaderComponent,
    FirstCapitalizeLetterPipe,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule,
    NgbRatingModule,
    NgIconsModule.withIcons({ bootstrapArrowLeft }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
