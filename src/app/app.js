import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
let App = class App {
    title = signal('my-app');
};
App = __decorate([
    Component({
        selector: 'app-root',
        standalone: false,
        styleUrl: './app.css',
        templateUrl: './app.html',
    })
], App);
export { App };
