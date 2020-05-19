import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/Genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres : Genre[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    // pas nu på med short-hands 'snippets'
    this.service.getGenre()
      .subscribe(arg => {
        this.genres = arg;
        console.log(arg);
        // can Invoke method here and set a cookie etc...
       });
      // console.log(this.genres);

  }

}
/**
   * Initial steps
   * DI, then import with lamp
   * code method to get data and make a property to hold data, import the class
   * HTML show it
   * include HTML
   */
