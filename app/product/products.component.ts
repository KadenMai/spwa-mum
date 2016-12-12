import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-products',
  styleUrls: ['app/product/products.component.css'],
  templateUrl: 'app/product/products.component.html'
})
export class ProductsComponent  implements OnInit{
  constructor(private productService: ProductService,
              private router: Router
             ){}

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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
