import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BindingPropertyComponent = class BindingPropertyComponent {
    name = 'Nguyễn Thị Long Lanh';
    email = 'longlanh@uel.edu.vn';
    nameid = 'nameid';
    emailid = 'emailid';
    isDisabled = false;
    hello = 'Welcome to K24411E hehehe!!!!';
    red_color = 'red';
    advanced_message = '<font color="blue">This is advanced message</font>';
};
BindingPropertyComponent = __decorate([
    Component({
        selector: 'app-binding-property-component',
        standalone: false,
        templateUrl: './binding-property-component.html',
        styleUrl: './binding-property-component.css',
    })
], BindingPropertyComponent);
export { BindingPropertyComponent };
