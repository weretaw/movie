import { MovieModel } from './../../model/movie.model';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent implements OnInit {
 @Input() movies:MovieModel[];
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
    debugger
    this.movies=this.movieService.getMovies()
    console.log("fromservice",this.movies);
    var index=this.movies.indexOf(this.data);
    if(this.movies!=null){
      this.movies.slice(index,1);
    }
    this.closeDialog();
  }
}
