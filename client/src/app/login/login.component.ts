import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    destroy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(private route: ActivatedRoute, private  apiService: ApiService, private router: Router) {
    }

    user = new FormControl('');
    password = new FormControl('');
    profileForm = new FormGroup({
        user: this.user,
        password: this.password,
    });


    ngOnInit(): void {
        this.apiService.isLoggedInSubject
            .subscribe((isLogged) => {
            if (isLogged) {
                this.router.navigate(['/secure'])
            }
        })
    }

    ngOnDestroy() {
        this.apiService.isLoggedInSubject.unsubscribe()
    }

    onSubmit() {
        this.apiService.login(this.user.value, this.password.value);
    }
}
