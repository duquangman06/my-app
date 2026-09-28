import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GroupCustomersComponent = class GroupCustomersComponent {
    customerService;
    changeDetector;
    customerGroups = [];
    isLoading = true;
    loadError = false;
    constructor(customerService, changeDetector) {
        this.customerService = customerService;
        this.changeDetector = changeDetector;
    }
    ngOnInit() {
        this.customerService.getGroupedCustomers().subscribe({
            next: (data) => {
                this.customerGroups = Array.isArray(data) ? data : [];
                this.isLoading = false;
                this.changeDetector.markForCheck();
            },
            error: () => {
                this.loadError = true;
                this.isLoading = false;
                this.changeDetector.markForCheck();
            }
        });
    }
};
GroupCustomersComponent = __decorate([
    Component({
        selector: 'app-group-customers-component',
        standalone: false,
        templateUrl: './group-customers-component.html',
        styleUrls: ['./group-customers-component.css']
    })
], GroupCustomersComponent);
export { GroupCustomersComponent };
