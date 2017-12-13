import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from './ProductService';

@Component({
    selector: 'product-form',
    templateUrl: './templates/product-form.component.html',
    styles: []
})
export class ProductFormComponent {

    constructor(private productService: ProductService) { }

    ProductForm = new FormGroup({
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl()
    });

    submit() {
        this.productService.addProduct(this.ProductForm.get('name').value, this.ProductForm.get('price').value, this.ProductForm.get('description').value);
    }
}
