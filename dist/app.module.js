"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./components/app.component");
var app_header_component_1 = require("./components/app.header.component");
var app_users_component_1 = require("./components/app.users.component");
var app_httpusers_component_1 = require("./components/app.httpusers.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, app_header_component_1.HeaderAppComponent, app_users_component_1.GitUsers, app_httpusers_component_1.HttpComponent],
        bootstrap: [app_component_1.AppComponent, app_header_component_1.HeaderAppComponent, app_users_component_1.GitUsers, app_httpusers_component_1.HttpComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map