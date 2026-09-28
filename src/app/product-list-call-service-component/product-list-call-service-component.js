import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductListCallServiceComponent = class ProductListCallServiceComponent {
    ps;
    products = [];
    constructor(ps) {
        this.ps = ps;
        //this.products=ps.getProductList()
    }
    ngOnInit() {
        this.products = this.ps.getProductList();
    }
};
ProductListCallServiceComponent = __decorate([
    Component({
        selector: 'app-product-list-call-service-component',
        standalone: false,
        templateUrl: './product-list-call-service-component.html',
        styleUrl: './product-list-call-service-component.css',
    })
], ProductListCallServiceComponent);
export { ProductListCallServiceComponent };
