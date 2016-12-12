import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule}      from "@angular/forms";
import {HttpModule}       from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./product/in-memory-data.service";

import { AppComponent }  from './app.component';
import {ProductDetailComponent} from "./product/product-detail.component";
import {ProductsComponent} from "./product/products.component";
import {ProductService} from "./product/product.service";
import {DashboardComponent} from "./dashboard/dashboard.component";





@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),
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

