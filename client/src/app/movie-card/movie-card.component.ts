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

  constructor(public  apiService: ApiService) { }

  ngOnInit(): void {
  }

}
