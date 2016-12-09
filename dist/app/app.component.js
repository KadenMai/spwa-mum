"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PRODUCTS = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Ipad' },
    { id: 3, name: 'Macbook' },
    { id: 4, name: 'iPod' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'List of Products';
        this.products = PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['app/style/productStyle.css'],
        template: "\n\n<h1>{{title}}</h1>\n\n<ul class = \"products\">\n  <li *ngFor=\"let product of products\"\n      (click)=\"onSelect(product)\"\n      [class.selected]=\"product === selectedProduct\"\n  >\n    <span class=\"badge\">{{product.id}}</span> {{product.name}}\n  </li>\n</ul>          \n<product-detail [product]=\"selectedProduct\"></product-detail>\n",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map