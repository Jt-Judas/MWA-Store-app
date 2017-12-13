import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CartModule} from './cart.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { ProductsDetailComponent } from './product-detail.component';
import { ProductService } from './ProductService';
import { ProductFormComponent } from './ProductFormComponent';


@NgModule({
  declarations: [
    AppComponent, ProductsListComponent, ProductsDetailComponent,ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CartModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
