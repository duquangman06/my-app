import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CustomerService = class CustomerService {
    http;
    // Nhúng HttpClient vào service
    constructor(http) {
        this.http = http;
    }
    // Hàm đọc dữ liệu từ file JSON
    getGroupedCustomers() {
        return this.http.get('/assets/data/customers.json');
    }
};
CustomerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CustomerService);
export { CustomerService };
