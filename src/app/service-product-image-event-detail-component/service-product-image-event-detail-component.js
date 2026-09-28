import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let ServiceProductImageEventDetailComponent = class ServiceProductImageEventDetailComponent {
    activateRoute;
    _fs;
    router;
    selectedProduct;
    constructor(activateRoute, _fs, router) {
        this.activateRoute = activateRoute;
        this._fs = _fs;
        this.router = router;
        activateRoute.paramMap.subscribe((param) => {
            let id = param.get('id');
            if (id != null) {
                this.selectedProduct = _fs.getProductDetail(id);
            }
        });
    }
    goBack() {
        this.router.navigate(['service-product-image-event']);
    }
};
ServiceProductImageEventDetailComponent = __decorate([
    Component({
        selector: 'app-service-product-image-event-detail',
        imports: [CommonModule],
        templateUrl: './service-product-image-event-detail-component.html',
        styleUrls: ['./service-product-image-event-detail-component.css']
    })
], ServiceProductImageEventDetailComponent);
export { ServiceProductImageEventDetailComponent };
