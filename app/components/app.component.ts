import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [
        'h1 { font-weight: bold; } .blue-font{color:blue}'
    ],
    styleUrls:['../app/css/app.component.css'],
    template: `
    <div class="jumbotron text-center">
        <header-app></header-app>
      <h1 class="red-font">The App Lives!</h1>
      <p class="blue-font">{{ message }}</p>
    </div>
     `
})
export class AppComponent {
    message = "Hello World";
}