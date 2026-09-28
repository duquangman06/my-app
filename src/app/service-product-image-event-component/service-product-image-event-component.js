import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let ServiceProductImageEventComponent = class ServiceProductImageEventComponent {
    pservice;
    router;
    products;
    constructor(pservice, router) {
        this.pservice = pservice;
        this.router = router;
        this.products = pservice.getProductsWithImages();
    }
    viewDetail(f) {
        this.router.navigate(['service-product-image-event', f.ProductId]);
    }
};
ServiceProductImageEventComponent = __decorate([
    Component({
        selector: 'app-service-product-image-event',
        imports: [CommonModule],
        templateUrl: './service-product-image-event-component.html',
        styleUrls: ['./service-product-image-event-component.css']
    })
], ServiceProductImageEventComponent);
export { ServiceProductImageEventComponent };
