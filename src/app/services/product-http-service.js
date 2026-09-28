import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProductHttpService = class ProductHttpService {
    _http;
    _url = "/datasets/products.json";
    constructor(_http) {
        this._http = _http;
    }
    getProductList() {
        return this._http.get(this._url);
    }
};
ProductHttpService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductHttpService);
export { ProductHttpService };
