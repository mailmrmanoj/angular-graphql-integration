"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GitUsers = (function () {
    function GitUsers() {
        this.users = [
            { id: 25, name: 'Chris', username: 'whatnicktweets' },
            { id: 26, name: 'Nick', username: 'whatnicktweets' },
            { id: 27, name: 'Holly', username: 'hollylawly' }
        ];
    }
    GitUsers.prototype.selectUser = function (user) {
        alert(user.name);
    };
    return GitUsers;
}());
GitUsers = __decorate([
    core_1.Component({
        selector: 'git-users',
        template: "\n   <div *ngIf=\"users\">\n      <ul class=\"list-group users-list\">\n        <li class=\"list-group-item\"\n          *ngFor=\"let user of users\"\n          (click)=\"selectUser(user)\"\n          [class.active]=\"user === activeUser\">\n          {{ user.name }} ({{ user.username }})\n        </li>\n      </ul>\n      </div>"
    })
], GitUsers);
exports.GitUsers = GitUsers;
//# sourceMappingURL=app.users.component.js.map