import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MovieModel } from '../../model/movie.model';
import { MovieService } from '../../service/movie.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  movies: MovieModel;
  genres: any;
  constructor(private fb: FormBuilder,
     private movieService: MovieService,
     public dialogRef: MatDialogRef<AddMovieComponent>,
                @Inject(MAT_DIALOG_DATA) public data: MovieModel,
      private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.registerToEvents();
    this.getGenre();
  }

  closeDialog(){
    this.dialogRef.close();
  }
  registerToEvents() {
    //set values
    this.movieForm.valueChanges.subscribe(
      values => {
        //  this.setValues(values);
      }
    )
  }

  getGenre() {
    this.movieService.getMovieGenre().subscribe(
      genre => {
        this.genres = genre;
        console.log("genre", this.genres);
      },
      error => {
        console.log(error);
      }
    );
  }

  createForm() {
    this.movieForm = this.fb.group(
      {
        Title: ['', Validators.required],
        Year: ['', Validators.required],
        Runtime: ['', Validators.required],
        Poster:['',Validators.required],
        Genre: ['', Validators.required],
        Director: ['', Validators.required]
      }
    );
  }

  saveForm() {
    if (this.movieForm.valid) {
      console.log("formValue", this.movieForm.value);
      this.movies = this.movieForm.value;
      console.log("detailValue", this.movies);
      this.movieService.createMovie(this.movies).subscribe(
        response => {
          let text = "success";
          this.router.navigate(['movie']);
        },
        error => {
          console.log(error);
        }
      )
      console.log("save", this.movies)
    }
  }

}
