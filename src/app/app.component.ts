import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  myName: string = "Phung Viet Phi";
  myAge: number = 20;
  myStatus: boolean = true;
  myInfo: { name: string, age: number } = {
    name: "Phung Viet Phi",
    age: 20
  };

  showInfo(name: string) {
    return `My name is ${name ? name : this.myName} and I'm ${this.myAge} years old`;
  }
}
