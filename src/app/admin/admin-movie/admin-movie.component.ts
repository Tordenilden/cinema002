import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {
  movie:Movie;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.movie = new Movie();
  }

  //search for movie
  searchMovie(){
    //this function should parse an movieId to the service to get a movie and return it to the movie object
    // fillout all the input text areas
    console.log(this.movie.title);

    this.service.searchMovie(this.movie.title).subscribe(
      (movieFromApi)=> {
        this.movie=movieFromApi
        console.log(this.movie);

      }
    )
  }

  updateMovie(){
    //this function should update, hvordan gør vi det?
    console.log(this.movie);
    //return;
    this.service.updateMovie(this.movie.movieId,this.movie).subscribe(

    )
  }

}
