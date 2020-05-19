export class Movie
{
  movieId     : number;
  title       : string;
  movieLength : number;
  moviegenre  : any[];
  releaseDate : Date;
  director    : string;
  description : string;
  imgUrl      : string;
  url         : string;
  ageToWatch  : number;
  //moviegenre : any[]; // vi skal finde ud af om det er et array?
  // "moviegenre":[
  //   {
  //     "genreId":1
  //   },
  //   {
  //     "genreId":2
  //   }
  //   ]
}
