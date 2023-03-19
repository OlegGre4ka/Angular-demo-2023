import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './shared/button/button.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PhotoComponent } from './components/photos/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PhotosComponent,
    ButtonComponent,
    NavigationComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
