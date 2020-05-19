import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  /**
   * what dælen do we do?
   * DI route
   * init() => skal pakke vores objekt ud igen til et objekt
   * opfundet et obj som kan indeholde alle vores data!!
   */
  movie:Movie;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      //(objectReceived)=> this.movie = objectReceived["dataMovie"] // lige nu er det en string
      (objectReceived)=> {
        this.movie = JSON.parse(objectReceived["dataMovie"]) // dataMovie stammer fra movie.component.ts
        //og skal staves på samme måde
        console.log(this.movie);
      }
    )

    // nu skal vi skrive en query der kan hente samtlige shows ud om den ene movie
  }

}
