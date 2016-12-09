/**
 * Created by v-khmai on 12/9/2016.
 */

import {Component, Input} from "@angular/core";
import {Product} from "./product";


@Component({
  selector: 'product-detail',
  templateUrl: '/app/product/products.html'
})

export class ProductDetailComponent{
  @Input()
  product: Product;
}
