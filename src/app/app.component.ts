import { Component } from '@angular/core';
import { IIsFavoriteChangedEvent } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  post = {
    title: 'title',
    isFavorite: true
  }

  onFavoriteChanged(isFavorite: IIsFavoriteChangedEvent){
    console.log(isFavorite.newValue);
  }
}
