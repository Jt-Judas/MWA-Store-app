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

    productForm = new FormGroup({
        name: new FormControl('', [Validators.required], [ProductValidators.isUniqueByObservable]),
        price: new FormControl(),
        description: new FormControl()
    });

    get name() {
        return this.productForm.get('name');
    }

    submit() {
        if (this.productForm.valid)
            this.productService.addProduct(this.productForm.get('name').value, this.productForm.get('price').value, this.productForm.get('description').value);
    }
}
