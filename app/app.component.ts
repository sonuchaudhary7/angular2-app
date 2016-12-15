import {Component} from 'angular2/core';
import {LoginComponent} from './login.component'
import {SiteUsers} from './siteusers.component'
import {HomeComponent} from './home.component'
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/users',
        name: 'Users',
        component: SiteUsers
    },
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    }
])


@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" [routerLink]="['Home']">
                            Angular2 
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9"> 
                        <ul class="nav navbar-nav">
                            <li *ngIf="authenticateUser()"><a [routerLink]="['Login']">Login</a></li>
                            <li *ngIf="!authenticateUser()"><a [routerLink]="['Users']">Users</a></li>
                            <li *ngIf="!authenticateUser()"><a style="cursor:pointer;" (click)="logout()">Logout</a></li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
    private user

    constructor(private _router: Router) {
        this.user = localStorage.getItem('user')
    }

    authenticateUser() {
        if(this.user != null || this.user != undefined) {
            return false
            // this._router.navigate(['./Login'])
        }
        return true
    }

    logout() {
        localStorage.removeItem('user')
        window.location.href = "/login"
    }
}