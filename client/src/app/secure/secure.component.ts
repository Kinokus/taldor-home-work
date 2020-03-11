import { Component, OnInit } from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  destroy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private route: ActivatedRoute, private  apiService: ApiService, private router: Router) { }



  ngOnInit(): void {
    this.apiService.isLoggedInSubject
        .subscribe((isLogged) => {
          if (!isLogged) {
            this.router.navigate(['/login'])
          }
        })
  }

  ngOnDestroy() {
    this.apiService.isLoggedInSubject.unsubscribe()
  }

}
