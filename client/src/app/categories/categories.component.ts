import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  private selectedCategory: number;

  constructor(private route: ActivatedRoute, public  apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getCategories();
  }

  setCategory(id: number) {
    if(this.apiService.selectedCategorySubject.value === id){
      this.apiService.selectedCategorySubject.next(-1);
    }else{
      this.apiService.selectedCategorySubject.next(id);
    }
  }
}
