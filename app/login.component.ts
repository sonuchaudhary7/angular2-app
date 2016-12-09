import {Component, ViewChild, ElementRef, Renderer} from 'angular2/core'

@Component({
    selector: 'login',
    templateUrl: 'login-form.html'
})

export class LoginComponent {
    @ViewChild('loginEmail') loginEmail:ElementRef
    @ViewChild('loginPass') loginPass:ElementRef
    private userEmail
    private userPass

    authUser() {
        
    }
}