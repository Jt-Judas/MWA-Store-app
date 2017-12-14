import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from './ProductService';
import { ProductValidators } from './product-validators';
import { Validators } from '@angular/forms';

@Component({
    selector: 'product-form',
    templateUrl: './templates/product-form.component.html',
    styles: ['form{background-color:grey}']
})
export class ProductFormComponent {

    constructor(private productService: ProductService) { }

    ProductForm = new FormGroup({
        name: new FormControl('', [Validators.required], [ProductValidators.isUniqueByObservable]),
        price: new FormControl(),
        description: new FormControl()
    });

    get name() {
        return this.ProductForm.get('name');
    }

    submit() {
        if (this.ProductForm.valid)
            this.productService.addProduct(this.ProductForm.get('name').value, this.ProductForm.get('price').value, this.ProductForm.get('description').value);
    }
}
