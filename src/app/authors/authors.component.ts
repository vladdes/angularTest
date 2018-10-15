import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  course = {
    title: "The Complete Angular Course",
    rating: 4.9245,
    students: 30123,
    price: 190.3055,
    releaseDate: new Date(2018, 10, 1)
  }

  randomText = `Lorem bacon bacon bacon bacon, life is bacon`;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
