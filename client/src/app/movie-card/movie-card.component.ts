import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../movie";
import {ApiService} from "../api.service";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

    @Input() movie: Movie;
    generatedStyle: any;

    constructor(public  apiService: ApiService) {
    }

    ngOnInit(): void {
        this.generatedStyle = {
            'background-image': 'url(https://picsum.photos/seed/' + this.movie.name + '/100)'
        }
    }

}
