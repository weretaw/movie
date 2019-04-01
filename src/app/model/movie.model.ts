import { Url } from 'url';
export class MovieModel {
  imdbID: string
  Title?: string;
  Year?: string;
  Runtime?: string;
  Type:string;
  Poster:Url;
  Gener?:string[];
  Director?:string;
}