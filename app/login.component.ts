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
    private loginAlert

    constructor(public loginS: LoginService) {}

    authUser() {
        
        let userData = {
            "password": this.loginPass.nativeElement.value,
            "email": this.loginEmail.nativeElement.value
        }
        if(!this.validations())
            return

        this.loginS.authUser(userData).subscribe(res => {
            this.authServiceResponse = res

            
            // TO DO: get details of logged in user.
            /* 
            this.loginS.getUserDetails(this.authServiceResponse.email, this.authServiceResponse.user_auth_token).subscribe(res1 => {
                this.authenticaedUserDetails = res1
                console.log(this.authenticaedUserDetails)
            })
            */ 
            // this.router.navigate(['./Users']);
            window.location.href = '/users'
            console.log(this.authServiceResponse)
            
        })
    }

    displayHideThings() {
        if(this.loginAlert != undefined || this.loginAlert != null)
            return 'block'
        return 'none'
    }

    validations() {
        if(this.loginEmail.nativeElement.value == '') {
            this.loginAlert = "Please enter email address."
            return false
        }

        if(this.loginPass.nativeElement.value == '') {
            this.loginAlert = "Please enter password."
            return false
        }

        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!EMAIL_REGEXP.test(this.loginEmail.nativeElement.value)) {
            this.loginAlert = "Please enter valid email address."
            return false
        }
        this.loginAlert = null
        return true
    }

}