import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'my-products',
  styleUrls: ['app/style/productStyle.css'],
  template: `

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
export class ProductsComponent  implements OnInit{
  constructor(private productService: ProductService){}

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
