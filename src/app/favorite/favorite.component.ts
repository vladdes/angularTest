import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') stuffChange: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    var changeEvent: IIsFavoriteChangedEvent = {newValue: this.isFavorite};
    this.stuffChange.emit(changeEvent);
  }

 
}

export interface IIsFavoriteChangedEvent{
  newValue: boolean;
}
