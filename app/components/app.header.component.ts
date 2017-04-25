import { Component } from "@angular/core";

@Component({
    selector:'header-app',
    styles:[],
    template:'<h1>This is my {{title}}</h1>'
})
export class HeaderAppComponent {
    title = "Title";
}