import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule}      from "@angular/forms";
import {HttpModule}       from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";
import './rxjs-extensions';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./product/in-memory-data.service";

import { AppComponent }  from './app.component';
import {ProductDetailComponent} from "./product/product-detail.component";
import {ProductsComponent} from "./product/products.component";
import {ProductService} from "./product/product.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductSearchComponent} from "./search/product-search.component";





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
                  DashboardComponent,
                  ProductSearchComponent
                ],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

