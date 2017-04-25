import { Component } from "@angular/core";
import { GitUser } from '../models/user.model';

@Component({

selector:'git-users',
template:`
   <div *ngIf="users">
   {{response}}
      <ul class="list-group users-list">
        <li class="list-group-item"
          *ngFor="let user of users"
          (click)="selectUser(user)"
          [class.active]="user === activeUser">
          {{ user.name }} ({{ user.username }})
        </li>
      </ul>
      </div>`
})

export class GitUsers {
    users:Array<GitUser>=[
        { id: 25, name: 'Chris', username: 'whatnicktweets'},
        { id: 26, name: 'Nick', username: 'whatnicktweets' },
        { id: 27, name: 'Holly', username: 'hollylawly' }
       ]
       selectUser(user){
         alert(user.name);
       }

}