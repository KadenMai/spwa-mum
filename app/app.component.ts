import { Component } from '@angular/core';
import {Product} from "./product/product";


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
<product-detail [product]="selectedProduct"></product-detail>
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
