import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CartService } from './CartService';
import { CartComponent } from './cart.component';
import { CartPipe } from './CartPipe';

@NgModule({
  declarations: [
    CartComponent, CartPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CartComponent, CartPipe
  ],
  providers: [CartService]
})
export class CartModule { }
