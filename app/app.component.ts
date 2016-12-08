import { Component } from '@angular/core';

export class Product{
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
<h1>{{title}}</h1>
<h2>{{product.name}} details!</h2>
<div><label>id:</label>{{product.id}}</div>
<div>
  <label>name: </label>
  <input [(ngModel)]="product.name" placeholder="name">
</div>

`,
})
export class AppComponent  {

  title = 'List of Products';
  product: Product = {
    id: 1,
    name: 'Iphone'
  }
}
