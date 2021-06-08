import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() values : any;
  @Output() likePlus = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public incrementLike() {
    this.likePlus.emit(this.values.id);
  }

}
