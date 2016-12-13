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
    
    public authServiceResponse;
    public authenticaedUserDetails;

    constructor(public loginS: LoginService) {}

    authUser() {
        
        let userData = {
            "password": this.loginPass.nativeElement.value,
            "email": this.loginEmail.nativeElement.value
        }

        this.loginS.authUser(userData).subscribe(res => {
            this.authServiceResponse = res

            
            // TO DO: get details of logged in user.
            /* 
            this.loginS.getUserDetails(this.authServiceResponse.email, this.authServiceResponse.user_auth_token).subscribe(res1 => {
                this.authenticaedUserDetails = res1
                console.log(this.authenticaedUserDetails)
            })
            */ 
            console.log(this.authServiceResponse)
            
        })
    }
}