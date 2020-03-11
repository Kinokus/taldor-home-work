import {Injectable} from '@angular/core';
import {Movie} from "./movie";
import {Category} from "./category";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  //new BehaviorSubject(123);
  public isLoggedIn: boolean = false;
  public movies:Movie[]=[];
  public categories:Category[]=[];

  public login ;
  public getMovies;
  public getCategories;
}
