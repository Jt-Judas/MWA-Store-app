import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from './Product';

@Component({
    selector: 'product-detail',
    template: `
    <div *ngIf="currentProduct">
      <h3>
        {{title}}
      </h3>
      Name:<input type='text' [(ngModel)]='currentProduct.name' >
      Price:<input type='text' [(ngModel)]='currentProduct.price' >
      Desc:<input type='text' [(ngModel)]='currentProduct.description' >
      <br>
      <span *ngIf="currentProduct">
        Name: {{currentProduct.name}}<br>
        Price: $ {{currentProduct.price}}<br>
        Description:{{currentProduct.description}}
      </span>
      <br>
      <input type='button' value='Delete product' style="margin:10px" (click)="delete()">
    </div>    
  `,
    styles: ['div{border:1px solid red;text-align:center;background-color:white;margin:20px}']
})
export class ProductsDetailComponent {
    title = 'Product Details';
    
    @Output()
    deleteProduct = new EventEmitter<Product>();

    @Input()
    currentProduct: Product;
   
    delete() {
        this.deleteProduct.emit(this.currentProduct);
    }
}