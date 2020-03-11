import {Injectable} from '@angular/core';
import {Movie} from "./movie";
import {Category} from "./category";
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {LoginStatus} from "./loginStatus";


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) {

    }

    public categoriesHelper: any = {};

    public isLoggedInSubject = new BehaviorSubject<boolean>(false);
    public moviesSubject = new BehaviorSubject<Movie[]>([]);
    public categoriesSubject = new BehaviorSubject<Category[]>([]);
    public selectedCategorySubject = new BehaviorSubject<number>(-1);

    public login = async (user, password): Promise<void> => {
        const url = `http://${window.location.hostname}/api/login`;
        const params = {user, password};
        const response: LoginStatus = await this.http.post(url, params).toPromise();
        this.isLoggedInSubject.next(response.isLogged);

    };

    public getMovies = async (category?: number) => {
        const url = `http://${window.location.hostname}/api/movies`;
        const response: Movie[] = await this.http.get<Movie[]>(url).toPromise();
        this.moviesSubject.next(response)
    };

    public getCategories = async () => {
        const url = `http://${window.location.hostname}/api/categories`;
        const response: Category[] = await this.http.get<Category[]>(url).toPromise();
        this.categoriesSubject.next(response)
    }
}
