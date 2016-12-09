import { Component } from '@angular/core';

export class Product{
  id: number;
  name: string;
}

const PRODUCTS: Product[] =
  [
    {id:1, name: 'Iphone'},
    {id:2, name: 'Ipad'},
    {id:3, name: 'Macbook'},
    {id:4, name: 'iPod'}
  ];

@Component({
  selector: 'my-app',
  styleUrls: ['app/style/productStyle.css'],
  template: `
<h1>{{title}}</h1>

<ul class = "products">
  <li *ngFor="let product of products" 
      (click)="onSelect(product)"
      [class.selected]="product === selectedProduct"
  >
    <span class="badge">{{product.id}}</span> {{product.name}}
  </li>
</ul>

<div *ngIf="selectedProduct">
<h2>{{selectedProduct.name}} details!</h2>
<div>
  <label>id: </label>{{selectedProduct.id}}
</div>
<div>
  <label>name: </label>
  <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
</div>
</div>
`,
})
export class AppComponent  {

  title = 'List of Products';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product: Product){
    this.selectedProduct = product;
  }
}
