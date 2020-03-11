import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


    constructor(private route: ActivatedRoute, public  apiService: ApiService, private router: Router) {
    }

    ngOnInit(): void {
        this.apiService.getMovies();
        this.apiService.categoriesSubject
            .subscribe((categories) => {
                if (categories) {
                    categories.forEach(category=>{
                        this.apiService.categoriesHelper[category.id] = category
                    })
                }
            })

    }

}
