import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1 style="color:white">
        {{title}}
      </h1>
      <product-list></product-list> 
    </div>  
  `,
  styles: ['div{border:3px solid red;text-align:center;background-color:blue}','hi{color:white}']
})
export class AppComponent {
  title = 'Welcome to App Store';
}
