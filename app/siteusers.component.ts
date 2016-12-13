import {Component, ViewChild, Renderer, ElementRef, OnInit} from 'angular2/core'
import {LoginService} from './login.service'
import {LoginComponent} from './login.component'

@Component({
    selector: 'site-users',
    templateUrl: 'site-users.html',
    providers: [LoginService, LoginComponent],

})
export class SiteUsers {
    @ViewChild('usersSection') usersSection:ElementRef
    constructor(private _logS:LoginService, private _logC:LoginComponent) {}

    private users

    getUsers() {
        this._logS.getUsers().subscribe(res => {
            this.users = res
        })
    }

    // to call getUsers OnInit
    ngOnInit() {
        this.getUsers()

    }
    
    displayUsersOrNot() {
        if(this._logC.authServiceResponse != undefined)
            return 'block'
        return 'block'
    }
}