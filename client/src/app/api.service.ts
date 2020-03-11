import {Injectable} from '@angular/core';
import {Movie} from "./movie";
import {Category} from "./category";
import {BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() {
    }


    public isLoggedInSubject = new BehaviorSubject<boolean>(false);
    public moviesSubject = new BehaviorSubject<Movie[]>([]);
    public categoriesSubject = new BehaviorSubject<Category[]>([]);

    public login = (user, password) => {

    };

    public getMovies = (category?: number) => {

    };

    public getCategories = () => {

    }
}
