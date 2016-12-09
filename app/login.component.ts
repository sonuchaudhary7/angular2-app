import {Component, ViewChild, ElementRef, Renderer} from 'angular2/core'
import {LoginInterface} from './login.interface'
import {LoginService} from './login.service'

@Component({
    selector: 'login',
    templateUrl: 'login-form.html',
    providers: [LoginService]
})

export class LoginComponent {
    @ViewChild('loginEmail') loginEmail:ElementRef
    @ViewChild('loginPass') loginPass:ElementRef
    
    private posts;

    constructor(private loginS: LoginService) {}

    authUser() {
        
        let userData = {
            "email": this.loginEmail.nativeElement.value,
            "password": this.loginPass.nativeElement.value
        }
        this.loginS.authUser(userData).subscribe()

        this.loginS.getPosts().subscribe(posts => {
            this.posts = posts 
        })
        // console.log(this.posts)
    }
}