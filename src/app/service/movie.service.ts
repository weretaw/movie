import { Injectable } from '@angular/core';
import { MovieModel } from '../model/movie.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: any={};
  constructor(private httpClinet: HttpClient) { }

  searchMovieById(movieId:string) {
    const url: string = '/api/?i=' + movieId + '&apikey=ca06d6b1';
    return fetch(url)
      .then(response => response.json());
    //return this.httpClinet.get('http://www.omdbapi.com/?i=tt1637725&apikey=ca06d6b1');
    //return this.httpClinet.get('./assets/movies.json');
  }

  searchMovieByTitle(title: string) {
    const url: any = 'http://www.omdbapi.com/?s=' + title + '&apikey=ca06d6b1';
    return fetch(url)
      .then(response => response.json())
      .then(resp=> {return this.movies=resp.Search});
  }
  
  getMovies(){
    return this.movies;
  }

  getMovieGenre(): Observable<string[]> {
    return this.httpClinet.get<string[]>('./assets/genres.json');
  }

  createMovie(movie: MovieModel) {
    let url: string = 'http://www.omdbapi.com/?apikey=ca06d6b1&' + 'movie/add';
    return this.httpClinet.post(url, movie);
  }
}
