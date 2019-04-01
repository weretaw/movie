import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { MovieModel } from 'src/app/model/movie.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  editMovieForm: FormGroup;
  movies: any;
  genres: any;
  constructor(private fb: FormBuilder,
     private movieService: MovieService,
     public dialogRef: MatDialogRef<EditMovieComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
      private router: Router) { }

  ngOnInit() {
    console.log("data",this.data);
    //this.movies=this.data;
    this.createForm();
    this.registerToEvents();
    this.getGenre();
    //this.editmovie();
  }

  closeDialog(){
    this.dialogRef.close();
  }
  registerToEvents() {
    //set values
    this.editMovieForm.valueChanges.subscribe(
      values => {
          this.setValue(values);
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
    this.editMovieForm = this.fb.group(
      {
        Title: [this.data[0].Title, Validators.required],
        Year: [this.data[0].Year, Validators.required],
        Poster: [this.data[0].Poster, Validators.required],
        Genre: ['', Validators.required],
        Director: ['', Validators.required]
      }
      );
     
  }

  editmovie(){
    console.log("movieIdEdit[0]",this.data[0])
    this.editMovieForm.setValue({
      Title:this.data[0].Title,
      Year: this.data[0].Year,
      Poster: this.data[0].Poster,
      Genre: this.data.Gener[0],
      Director: this.data[0].Director
    })
    console.log("editMovieForm",this.editMovieForm);
    
  }

  saveForm() {
    if (this.editMovieForm.valid) {
      console.log("formValue", this.editMovieForm.value);
      this.movies = this.editMovieForm.value;
      console.log("movies", this.movies);
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

  setValue(formValues:any){
    this.movies.Title=formValues.Title;
    this.movies.Year=formValues.Year;
    this.movies.Runtime=formValues.Runtime;
    this.movies.Gener=formValues.Gener;
    this.movies.Director=formValues.Director;
  }
}
