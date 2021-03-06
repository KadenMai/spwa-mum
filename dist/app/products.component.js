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
var product_service_1 = require("./product/product.service");
var ProductsComponent = (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
    }
    ProductsComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        //this.productService.getProductsSlowly().then(products => this.products = products);
        this.productService.getProducts().then(function (products) { return _this.products = products; });
        //this.products = this.productService.getProducts();
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'my-products',
        styleUrls: ['../../app/product/productStyle.css'],
        template: "\n\n<ul class = \"products\">\n  <li *ngFor=\"let product of products\"\n      (click)=\"onSelect(product)\"\n      [class.selected]=\"product === selectedProduct\"\n  >\n    <span class=\"badge\">{{product.id}}</span> {{product.name}}\n  </li>\n</ul>          \n<product-detail [product]=\"selectedProduct\"></product-detail>\n",
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map
