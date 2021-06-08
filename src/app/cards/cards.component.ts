import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cards : any;

  constructor() { }

  ngOnInit(): void {
  }

  public incLikes(id : any) : void {
    this.cards.forEach((el: any) => {
      if (el.id === id) el.likes++;
    });
  }
}
