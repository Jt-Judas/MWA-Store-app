import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list.component';
import { ProductsDetailComponent } from './product-detail.component';


@NgModule({
  declarations: [
    AppComponent, ProductsListComponent, ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
