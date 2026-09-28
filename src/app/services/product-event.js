import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProductEventService = class ProductEventService {
    productsImage = [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "assets/h1.png" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "assets/h2.png" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "assets/h3.png" }
    ];
    constructor() { }
    getProductsWithImages() {
        return this.productsImage;
    }
    getProductDetail(id) {
        return this.productsImage.find(x => x.ProductId == id);
    }
};
ProductEventService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductEventService);
export { ProductEventService };
