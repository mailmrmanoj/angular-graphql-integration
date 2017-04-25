import { Component } from "@angular/core";
import { HttpModule,Http,Response ,Headers,RequestOptions   } from '@angular/http';

@Component({
    selector:'http-req',
    template:`
    <h2>Basic Request</h2>
    <button type="button" (click)="makeRequest()">Make Request</button>
     <pre>{{data | json}}</pre>
    `
})
export class HttpComponent{
  data:any;
  constructor(private http: Http) {

      }
        makeRequest(): void {
        let headers = new Headers({ 'Content-Type': 'application/json','apiKey':'1212132' });
        let options = new RequestOptions({ headers: headers });
        this.http.get('http://192.168.1.98:90/common/departments',options)
        .subscribe((res: Response) => {
          this.data = res.json();
        });
    }

}