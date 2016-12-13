import {Injectable} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import {LoginInterface} from './login.interface'
import {UserDetails} from './getuserdetails.interface'


@Injectable()
export class LoginService {

    // please change the apis according to you.

    private _http = 'http://'
    private apiKey = '?key=classicspecs_dev'
    private getUserApiUrl = '192.168.42.3:5001/2.0/users/';

    private userAuthApiUrl = this._http + '192.168.42.3:5001/2.0/users/auth/' + this.apiKey

    constructor(private http: Http) {}

    authUser(userJson):Observable<LoginInterface> {
        let body = JSON.stringify(userJson)

        let headers = new Headers({
			'Content-Type': 'application/json;charset=utf-8'
		});
        headers.append('Access-Control-Allow-Origin','*');
		let options = new RequestOptions({
			headers: headers
		});
        
        return this.http.post(this.userAuthApiUrl, body, options)
            .map((res: Response)  => res.json().data)
                .catch((err:any) => Observable.throw(this.handleError(err.json())))
    }

    handleError(res) {
        if(res.code == '401')
            alert("Authentication failed, please check your login credentials")
        if(res.code == '500')
            alert("Something went wrong, please try again later")
    }

    getUserDetails(email, token):Observable<UserDetails> {
        let url = this._http + 'token:' + token + '@' + this.getUserApiUrl + email + this.apiKey
        return this.http.get(url)
            .map(res => res.json().data) 
                .catch((err:any) => Observable.throw(this.handleError(err.json())))
    }

    getUsers() {
        let url = "https://jsonplaceholder.typicode.com/users"
        return this.http.get(url)
            .map(res => res.json())
    }

}