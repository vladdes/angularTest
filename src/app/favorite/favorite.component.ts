import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output() post: any;
  constructor() { }

  ngOnInit() {
  }

}
