import { Component } from '@angular/core';
import { Product } from './Product';

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
  products: Product[] = [new Product("1", "iPhone", 450, "iPhone desc"), new Product('2', 'iPad', 270, 'iPad desc'), new Product('3', 'Apple Tv', 300, 'Apple TV desc')];
  selectedProduct: Product;
  
  delete(product: Product) {    
    this.products.splice(this.products.indexOf(product), 1);
  }
}