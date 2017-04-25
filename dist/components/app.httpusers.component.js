"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HttpComponent = (function () {
    function HttpComponent(http) {
        this.http = http;
    }
    HttpComponent.prototype.makeRequest = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'apiKey': '1212132' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.get('http://192.168.1.98:90/common/departments', options)
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    return HttpComponent;
}());
HttpComponent = __decorate([
    core_1.Component({
        selector: 'http-req',
        template: "\n    <h2>Basic Request</h2>\n    <button type=\"button\" (click)=\"makeRequest()\">Make Request</button>\n     <pre>{{data | json}}</pre>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HttpComponent);
exports.HttpComponent = HttpComponent;
//# sourceMappingURL=app.httpusers.component.js.map