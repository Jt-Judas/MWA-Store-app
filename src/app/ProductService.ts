import { Product } from "./Product";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {
  
    products: Product[];

    getProducts() {
        this.products = [new Product("1", "iPhone", 450, "iPhone desc"), new Product('2', 'iPad', 270, 'iPad desc'), new Product('3', 'Apple Tv', 300, 'Apple TV desc')];
        return Observable.of(this.products);
    }

    deleteProduct(product: Product) {
        this.products.splice(this.products.indexOf(product), 1);
    }
}