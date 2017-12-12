import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CartModule} from './cart.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { ProductsDetailComponent } from './product-detail.component';
import { ProductService } from './ProductService';


@NgModule({
  declarations: [
    AppComponent, ProductsListComponent, ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
