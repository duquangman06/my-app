import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BindingEventComponent = class BindingEventComponent {
    a = 5;
    b = 10;
    result = "result here";
    doSolution(hsa, hsb) {
        this.a = parseFloat(hsa);
        this.b = parseFloat(hsb);
        if (this.a == 0 && this.b == 0) {
            this.result = "tùm lum nghiệm";
        }
        else if (this.a == 0 && this.b != 0) {
            this.result = "Không có nghiệm";
        }
        else {
            this.result = "x=" + (-this.b / this.a);
        }
    }
};
BindingEventComponent = __decorate([
    Component({
        selector: 'app-binding-event-component',
        standalone: false,
        templateUrl: './binding-event-component.html',
        styleUrl: './binding-event-component.css',
    })
], BindingEventComponent);
export { BindingEventComponent };
