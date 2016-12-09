/**
 * Created by user on 12/9/2016.
 */
import {Component, OnInit} from "@angular/core";
import {ProductService} from "../product/product.service";
import {Product} from "../product/product";
@Component({
  selector: 'my-dashboard',
  templateUrl: "app/dashboard/dashboard.component.html"
})

export class DashboardComponent implements OnInit{
  Products: Product[] = [];
  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.productService.getProducts()
      .then(products => this.Products = products.slice(1,3));
  }
}
