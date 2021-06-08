import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {

  @Output() addPost = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  public message : string = '';
  public postAble : boolean = false;

  public updateForm(e : any) : void {
    this.message = e.target.value;
    this.postAble = (e.target.value.length > 0) ? true : false;
  }

  public postAction(event : any) : void {
    event.preventDefault();
    this.addPost.emit(this.message);
    this.message = '';
    this.postAble = false;
  }

  public cancelAction(event : any) : void {
    event.preventDefault();
    this.message = '';
    this.postAble = false;
  }

}