import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';
let ProductHttpHandleErrorService = class ProductHttpHandleErrorService {
    _http;
    _url = "/datasets/products.json";
    constructor(_http) {
        this._http = _http;
    }
    getProductList() {
        return this._http.get(this._url)
            .pipe(retry(3), catchError(this.handleError));
    }
    getProductById(id) {
        return this.getProductList().pipe(map((products) => products.find(p => p.id === id)), catchError(this.handleError));
    }
    handleError(error) {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            // 1. Client-side error (e.g., network issues, subscription errors)
            errorMessage = `Client-side error: ${error.error.message}`;
        }
        else {
            // 2. Server-side error (e.g., 404 Not Found, 500 Internal Server Error)
            errorMessage = `
      Error Status: ${error.status}
      Status Text: ${error.statusText}
      URL: ${error.url}
      Server Details: ${error.error ? JSON.stringify(error.error) : 'No details available'}
    `;
        }
        // Log to console for debugging purposes
        console.error(errorMessage);
        // Return detailed error message to be handled by the Component
        return throwError(() => new Error(error.message));
    }
};
ProductHttpHandleErrorService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductHttpHandleErrorService);
export { ProductHttpHandleErrorService };
