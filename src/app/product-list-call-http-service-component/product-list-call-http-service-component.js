import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
let ProductListCallHttpServiceComponent = class ProductListCallHttpServiceComponent {
    _service;
    products = signal([]);
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
        this._service.getProductList().subscribe({
            next: (data) => {
                this.products.set(data);
            },
            error: (err) => {
                alert("ERROR: " + JSON.stringify(err));
            }
        });
    }
};
ProductListCallHttpServiceComponent = __decorate([
    Component({
        selector: 'app-product-list-call-http-service-component',
        standalone: false,
        templateUrl: './product-list-call-http-service-component.html',
        styleUrl: './product-list-call-http-service-component.css',
    })
], ProductListCallHttpServiceComponent);
export { ProductListCallHttpServiceComponent };
