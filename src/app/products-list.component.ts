import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './ProductService';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'product-list',
  template: `
    <div>
        <h1>
          {{title}} : Total of {{products.length}} products
        </h1>
        <table>
          <tr>
            <td><h3>#</h3></td>
            <td><h3>Name</h3></td>
            <td><h3>Price</h3></td>
          </tr>
          <tr *ngFor="let product of products, let i=index" (click)="selectedProduct=product">
            <td>{{product.id}}.</td>
            <td>{{product.name}}</td>
            <td>{{product.price | currency:'USD'}}</td>
          </tr>
        </table>
        <div>
              <span><h4>Add new product</h4></span>
              <product-form></product-form>
        </div>
    </div> 
    <product-detail [currentProduct]="selectedProduct" (addToCart)="testToSee($event)" (deleteProduct)="delete($event)"></product-detail>  
  `,
  styles: ['div{border:1px solid red;text-align:center;background-color:white;margin:10px;padding:10px}','ul{text-align:center}','table{text-align:center;margin:auto;display: inline-block;}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductsListComponent {
  title = 'Product List';
  products:Product[];

  selectedProduct: Product;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products=>this.products=products);
  }

  delete(product: Product) {
    this.productService.deleteProduct(product);
  }

  testToSee(product:Product){
    console.log("Me too, I am here");
  }
}