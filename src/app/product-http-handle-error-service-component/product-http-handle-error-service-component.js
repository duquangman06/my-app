import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
let ProductHttpHandleErrorServiceComponent = class ProductHttpHandleErrorServiceComponent {
    _service;
    products = signal([]);
    errMessage = signal("");
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
        this._service.getProductList().subscribe({
            next: (data) => {
                this.products.set(data);
            },
            error: (err) => {
                this.errMessage.set(err);
            }
        });
    }
};
ProductHttpHandleErrorServiceComponent = __decorate([
    Component({
        selector: 'app-product-http-handle-error-service-component',
        standalone: false,
        styleUrl: './product-http-handle-error-service-component.css',
        templateUrl: './product-http-handle-error-service-component.html',
    })
], ProductHttpHandleErrorServiceComponent);
export { ProductHttpHandleErrorServiceComponent };
