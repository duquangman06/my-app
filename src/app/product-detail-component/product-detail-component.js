import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
let ProductDetailComponent = class ProductDetailComponent {
    _service;
    router;
    activateRoute;
    product = signal(null);
    errMessage = signal("");
    constructor(_service, router, activateRoute) {
        this._service = _service;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe((param) => {
            let idParam = param.get('id');
            if (idParam != null) {
                let id = parseInt(idParam);
                this._service.getProductById(id).subscribe({
                    next: (data) => {
                        this.product.set(data ?? null);
                    },
                    error: (err) => {
                        this.errMessage.set(err);
                    }
                });
            }
        });
    }
};
ProductDetailComponent = __decorate([
    Component({
        selector: 'app-product-detail-component',
        standalone: false,
        styleUrl: './product-detail-component.css',
        templateUrl: './product-detail-component.html',
    })
], ProductDetailComponent);
export { ProductDetailComponent };
