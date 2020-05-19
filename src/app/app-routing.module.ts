import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { MovieComponent } from './components/movie/movie.component';
import { ShowComponent } from './components/show/show.component';

// vi kan "bare" oprette vores menu / routes her / alternativ til dette er Material eller ng-bootstrap
const routes: Routes = [
  {path:"adminMovie", component:AdminMovieComponent},
  {path:"Movie", component:MovieComponent},
  {path:"show", component:ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
