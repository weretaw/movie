import { MovieModel } from './../../model/movie.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent implements OnInit {
  movies:MovieModel;
  constructor(
    private movieService: MovieService,
    public dialogRef: MatDialogRef<DeleteMovieComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  deleteMovie(){
    this.movieService.searchMovieById(this.data)
    .then(resp=>this.movies=resp.Search);
    if(this.movies!=null){
      this.movies.imdbID.slice(1);
    }
  }
}
