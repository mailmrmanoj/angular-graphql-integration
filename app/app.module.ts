import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import{AppComponent} from './components/app.component';
import{HeaderAppComponent} from './components/app.header.component';
import{GitUsers} from './components/app.users.component';
import{HttpComponent} from './components/app.httpusers.component';

@NgModule({
    imports: [BrowserModule,HttpModule ],
    declarations: [AppComponent,HeaderAppComponent,GitUsers,HttpComponent],
    bootstrap: [AppComponent,HeaderAppComponent,GitUsers,HttpComponent]
})
export class AppModule {

}