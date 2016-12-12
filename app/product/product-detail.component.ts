/**
 * Created by v-khmai on 12/9/2016.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Product} from "./product";
import {ProductService} from "./product.service"


@Component({
  moduleId: module.id,
  selector: 'product-detail',
  templateUrl: '/app/product/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
  //@Input()
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
      this.productService.update(this.product)
        .then(()=> this.goBack());
  }
}
