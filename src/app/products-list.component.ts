import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './ProductService';

@Component({
  selector: 'product-list',
  template: `
    <div>
      <h1>
        {{title}} : Total of {{products.length}} products
      </h1>
      <ul>
      <li *ngFor="let product of products" (click)="selectedProduct=product">
      {{ product.id }}: {{ product.name }}
      </li>
      </ul>
    </div> 
    <product-detail [currentProduct]="selectedProduct" (deleteProduct)="delete($event)"></product-detail>  
  `,
  styles: ['div{border:1px solid red;align-text:center;background-color:white;margin:10px}']
})
export class ProductsListComponent {
  title = 'Product List';
  products: Product[];

  selectedProduct: Product;

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  delete(product: Product) {
    this.productService.deleteProduct(product);
  }
}