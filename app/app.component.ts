import {Component, OnInit} from '@angular/core';
import {Product} from "./product/product";
import {ProductService} from "./product/product.service"

@Component({
  selector: 'my-app',
  styleUrls: ['app/style/productStyle.css'],
  providers: [ProductService],
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
export class AppComponent  implements OnInit{
  constructor(private productService: ProductService){}
  title = 'List of Products';
  products: Product[];
  selectedProduct: Product;

  onSelect(product: Product){
    this.selectedProduct = product;
  }

  getProducts(): void {
    //this.productService.getProductsSlowly().then(products => this.products = products);
    this.productService.getProducts().then(products => this.products = products);
    //this.products = this.productService.getProducts();
  }

  ngOnInit():void{
    this.getProducts();
  }
}
