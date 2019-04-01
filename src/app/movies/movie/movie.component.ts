import { DynamicColumnType } from './../../model/dynamic-column-type.enum';
import { DynamicColumnModel } from './../../model/dynamic-column.model';
import { DeleteMovieComponent } from './../delete-movie/delete-movie.component';
import { EditMovieComponent } from './../edit-movie/edit-movie.component';
import { AddMovieComponent } from './../add-movie/add-movie.component';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../model/movie.model';
import { MovieService } from '../../service/movie.service';
import { finalize, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  columns: any[];
  movies: MovieModel[];
  cols: DynamicColumnModel[];
  stringType: DynamicColumnType = DynamicColumnType.string;
  linkColumnType: DynamicColumnType = DynamicColumnType.link;
  movieById:any;
  loading: boolean;
  totalRecords:number;
  constructor(private movieService: MovieService,
    private router: Router,
    public dialog: MatDialog
  ) { }
 
  ngOnInit() {
    this.searchMovie('title');
    //this.getMovie();
    this.columns = [
      { field: 'Title', header: 'Title',type:DynamicColumnType.string},
      { field: 'Year', header: 'Year',type:DynamicColumnType.string },
      { field: 'Runtime', header: 'Runtime',type:DynamicColumnType.string },
      { field: 'Poster', header: 'Poster',type:DynamicColumnType.link},
      { field: 'Genre', header: 'Genre',type:DynamicColumnType.string },
      { field: 'Director', header: 'Director',type:DynamicColumnType.string },
    ];
  }
  searchMovie(title: string) {
    this.movieService.searchMovieByTitle(title.toLowerCase())
      .then(resp => this.movies = resp.Search);
    console.log("search", this.movies);
  }
  openAddMovieDialog(): void {
    this.dialog.open(AddMovieComponent, {
      minHeight: "300px",
      minWidth: "300px",
      panelClass: "dialog-custom-style",
      data: {}
    })
  }

  getMoviebyId(movieId:string):any{
   this.movieById=this.movies.filter(m=>m.imdbID==movieId);
  console.log("movieId",this.movieById);
  return this.movieById;
  }
  

  openEditMovieDialog(movieId:string){
   var movie:any = this.getMoviebyId(movieId);
   console.log(movie);
    this.dialog.open(EditMovieComponent, {
      minHeight: "300px",
      minWidth: "300px",
      panelClass: "dialog-custom-style",
      data: movie
    })
  }

  deleteMovieDialog(movieId:any){
    this.dialog.open(DeleteMovieComponent, {
      minHeight: "300px",
      minWidth: "300px",
      panelClass: "dialog-custom-style",
      data: movieId
    })
  }
}
