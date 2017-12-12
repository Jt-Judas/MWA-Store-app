
import { CartItem } from './CartItem';
import { Product } from './Product';
import { Observable } from 'rxjs/Rx';

export class CartService {
    cart: CartItem[] = [];
    totalAmount: number = 0;

    addToCart(product: Product) {
        let cartItem: CartItem;
        console.log("The name--" + product.name);
        cartItem = this.cart.find(it => it.name === product.name);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            this.cart.push(new CartItem(product.name, 1, product.price));
        }
        this.getAmount();
    }

    removeFromCart(item: CartItem) {
        this.cart.splice(this.cart.indexOf(item), 1);
    }

    getAmount() {

        let amount: number = 0;
        this.cart.forEach(function (d) {
            amount += (d.amount*d.quantity);
        });
        this.totalAmount = amount
        return amount;
    }

    getCartIems() {
        return Observable.of(this.cart);
    }
}