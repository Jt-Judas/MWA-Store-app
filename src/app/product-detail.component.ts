import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from './Product';
import { CartModule } from './cart.module';
import { CartService } from './CartService'

@Component({
  selector: 'product-detail',
  template: `
    <cart (addToCart)="addItemToCart($event)" (removeItem)="testRemove($event)"></cart>  
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
      <input type='button' value='Add to cart' style="margin:10px" (click)="addItemToCart()">
    </div>    
  `,
  styles: ['div{border:1px solid red;text-align:center;background-color:white;margin:20px}']
})
export class ProductsDetailComponent {
  title = 'Product Details';

  @Output()
  deleteProduct = new EventEmitter<Product>();

  @Output()
  addToCart = new EventEmitter<Product>();

  @Input()
  currentProduct: Product;

  constructor(private cartService: CartService) { }

  delete() {
    this.deleteProduct.emit(this.currentProduct);
  }

  addItemToCart(product: Product) {
    //this.addToCart.emit(product);
    this.cartService.addToCart(this.currentProduct);
  }

}