import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AppComponent} from './components/app.component';
import{HeaderAppComponent} from './components/app.header.component';
import{GitUsers} from './components/app.users.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,HeaderAppComponent,GitUsers],
    bootstrap: [AppComponent,HeaderAppComponent,GitUsers]
})
export class AppModule {

}