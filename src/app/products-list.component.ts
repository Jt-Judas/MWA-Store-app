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
     <ul>
      <li *ngFor="let product of products, let i=index" (click)="selectedProduct=product">
       {{i+1}}. Product Id: {{ product.id }} ,Name: {{ product.name }}
      </li>
     </ul>
    </div> 
    <product-detail [currentProduct]="selectedProduct" (addToCart)="testToSee($event)" (deleteProduct)="delete($event)"></product-detail>  
  `,
  styles: ['div{border:1px solid red;text-align:center;background-color:white;margin:10px}','ul{text-align:center}'],
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