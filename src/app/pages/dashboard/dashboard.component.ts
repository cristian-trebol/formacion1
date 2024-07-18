import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  name:string = 'John Doe';
  age:number = 30;
  users: User[] = [];

  saveUser(){
    this.users.push({name: this.name, age: this.age});
    this.name = '';
    this.age = 0;

  }
}
