import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { Genre } from 'src/app/model/Genre';
import { HttpService } from 'src/app/service/http.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  // not defined!! mangler den en af 2 ting property / method
  movieId     : number;
  title       : string;
  movieLength : number;
  releaseDate : Date;
  director    : string;
  description : string;
  imgUrl      : string;
  url         : string;
  ageToWatch  : number;
  moviegenre  : any[];
  temp        : any[];

  movies : Movie[];
  genres : Genre[];

  // DP (Design Princip) (thoughts)
  // DI (Dependency Injection / Design pattern)  (implementation)
  //
  constructor(private service:HttpService, private router:Router) { }

  ngOnInit(): void {
    // get all movies
    // måske koder vi den!!
    // getMovie kan være herinde, men kan osse lægges seperat
    this.service.getMovies().subscribe(arg =>this.movies=arg); // det er en callbackmetode - annonymous method
    //this.service.getMovies().subscribe(this.svar); // hvad sker der her? det er squ da mærkeligt!!
    this.service.getGenre().subscribe(arg => this.genres= arg);
  }

  // post/add Movie
  postMovie(){
    //alert('klikker');
    console.log(this.temp);
    //return;
    //array.forEach(element => {


    // return ;
    //opretter simpelt array for at teste indsættelse af genre
    let tt : any = JSON.parse(`{"genreId":${this.temp}}`);
    //let tt : any = `{"genreId":${this.temp}}`;
    console.log(tt);
// return;
    let tempGenre : any = [
      {
        "genreId":1
      }

  ];
    //rubberduck coding... kan du forklare hvad du gør det...
    //vil gerne parse data til vores service
    const movieToAdd = {
     // title: 'hans og grethe'  // første linje skal se således ud
      title       : this.title,
      movieLength : this.movieLength,
      releaseDate : this.releaseDate,
      director    : this.director,
      description : this.description,
      imgUrl      : this.imgUrl,
      url         : this.url,
      ageToWatch  : this.ageToWatch,
      moviegenre  : [tt]
    }
    console.log(movieToAdd);


   // this.service.postMovie(movieToAdd).subscribe(); // det virker tror jeg, men vi får ikke data tilbage
    // kan vi push() til vores array så data er i arrayet og på den måde Update siden (F5)
    this.service.postMovie(movieToAdd).subscribe(
      (movieAdded) => {this.movies.push(movieAdded);
      console.log(movieAdded);
      //console.log(this.movies);


      }
    );
  }
  // delete Movie
  deleteMovie(movieToDelete:number){
    // kalde service.....
    this.service.deleteMovie(movieToDelete).subscribe();
  }
  // put/update Moive
  putMovie(){

  }
  svar(arg:Movie[]){
    this.movies=arg; // hvad sker der her??
  }

    // illudere en queryParam situation
    allShowToMovie(movieObjectToShow:Movie){
      console.log(movieObjectToShow);
      //return;
      // wants a new component to go to
      // how do I go to another component?
      //https://stackoverflow.com/questions/36835123/how-do-i-pass-data-to-angular-routed-components
      let tempParams: NavigationExtras = {
        queryParams: {
            "dataMovie": JSON.stringify(movieObjectToShow)
        }
      };
      this.router.navigate(["show"], tempParams )
    }// end method allShowToMovie

}
