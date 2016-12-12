import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductDetailComponent} from "./product/product-detail.component";
import {ProductsComponent} from "./product/products.component";
import {ProductService} from "./product/product.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule
                ],
  declarations: [ AppComponent,
                  ProductsComponent,
                  ProductDetailComponent,
                  DashboardComponent
                ],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

