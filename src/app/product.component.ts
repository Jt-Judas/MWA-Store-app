import { Component } from '@angular/core';

@Component({
  selector: 'product',
  template: `
    <div style="text-align:center">
      <h1>
        {{title}}!
      </h1>
    </div>    
  `,
  styles: []
})
export class ProductComponent {
  title = 'A list of Products';
}