import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AppComponent} from './app.component';
import{HeaderAppComponent} from './app.header.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,HeaderAppComponent],
    bootstrap: [AppComponent,HeaderAppComponent]
})
export class AppModule {

}