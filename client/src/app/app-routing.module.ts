import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecureComponent} from "./secure/secure.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
    {
        path: 'secure/:id',
        component: SecureComponent,
        pathMatch: 'full'
    },
    {path: 'secure', component: SecureComponent},
    {path: 'login', component: LoginComponent},
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
