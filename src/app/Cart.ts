
import { CartItem } from './CartItem';
import { Product } from './Product';

export class Cart {
    cart: CartItem[];

    constructor(private amount: number) { }

    addToCart(product: Product) {
        let cartItem: CartItem;
        cartItem = this.cart.find(it => it.name === product.name);
        if (cartItem) {
            cartItem.quantity += 1;
            cartItem.amount += product.price;
        } else {
            this.cart.push(new CartItem(product.name, 1, product.price));
        }
    }

    removeFromCart(item: CartItem) {
        this.cart.splice(this.cart.indexOf(item), 1);
    }

    getAmount() {
        return this.cart.map(item => item.amount).reduce((a, b) => a + b);
    }
}