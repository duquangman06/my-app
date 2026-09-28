import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let CatalogComponent = class CatalogComponent {
    catalogService;
    categories;
    constructor(catalogService) {
        this.catalogService = catalogService;
        this.categories = this.catalogService.getCategories();
    }
};
CatalogComponent = __decorate([
    Component({
        selector: 'app-catalog',
        imports: [CommonModule],
        templateUrl: './catalog-component.html',
        styleUrls: ['./catalog-component.css']
    })
], CatalogComponent);
export { CatalogComponent };
