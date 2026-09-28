import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Contact = class Contact {
    sayHello() {
        alert('Hello from Contact Component!');
    }
    sayHello2(mydiv) {
        mydiv.innerHTML = 'Nguyễn Thị Hồng Nhung';
    }
};
Contact = __decorate([
    Component({
        selector: 'app-contact',
        standalone: false,
        styleUrl: './contact.css',
        templateUrl: './contact.html',
    })
], Contact);
export { Contact };
