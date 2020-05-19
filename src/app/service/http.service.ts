import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../model/Genre';
import { Movie } from '../model/Movie';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string = 'https://localhost:44324/api/movies/allmovies';
  urlStart:string = 'https://localhost:44324/api/';
  constructor(private http:HttpClient) {


   }

  //Genre
  // get allGenres
  getGenre():Observable<Genre[]>{
    return this.http.get<Genre[]>(`${this.urlStart}genres`);
  }




  // Movie
  // get all movies
  getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.urlStart}movies/allmovies`);
  }
  //Post movie, hvor mange movies vil vi gerne Add adgangen??
  // kan være vi får en fejl!! da vi ikke sætter moveiId ind i db - any
  postMovie(movieToAdd:any):Observable<Movie>{
    return this.http.post<Movie>(`${this.urlStart}movies`, movieToAdd, httpOptions);
  }

  // delete Movie
  deleteMovie(movieToDelete:number):Observable<Movie>{
    return this.http.delete<Movie>(`${this.urlStart}movies/${movieToDelete}`, httpOptions);
  }
 // https://localhost:44324/api/movies/1

}
/**
 * DI - use lamp
 * URL
 * Method for get/put....
 */
