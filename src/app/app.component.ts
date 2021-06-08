import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public cards : any = [
    {
      id : 1,
      name : "Seemo Cohen",
      profession : "Cyberproof Analyst",
      postDate : "day ago",
      message : "Found DDOS attack. Please be aware",
      likes : 10
    },
    {
      id : 2,
      name : "Seemo Cohen",
      profession : "Cyberproof Analyst",
      postDate : "2 days ago",
      message : "Found DDOS attack. Please be aware",
      likes : 15
    },
    {
      id : 3,
      name : "Seemo Cohen",
      profession : "Cyberproof Analyst",
      postDate : "3 days ago",
      message : "Found DDOS attack. Please be aware",
      likes : 20
    }
  ];

  public addNewPost(event : any) {
    this.cards.push({
      id : this.cards.length + 1,
      name : "Seemo Cohen",
      profession : "Cyberproof Analyst",
      postDate : "1 minute ago",
      message : event,
      likes : 0
    });
  }

}
