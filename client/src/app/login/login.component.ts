import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../api.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private  apiService: ApiService) {
    }

    user = new FormControl('');
    password = new FormControl('');
    profileForm = new FormGroup({
        user: this.user,
        password: this.password,
    });


    ngOnInit(): void {
    }

    onSubmit() {
      this.apiService.login(this.user.value, this.password.value);
    }
}
