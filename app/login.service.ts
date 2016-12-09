import {Injectable} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response, RequestMethod. Request} from 'angular2/http'
import {Observable} from 'rxjs/observable'
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import {LoginInterface} from './login.interface'

@Injectable()
export class LoginService {
    private posts;
    private postApiUrl = 'https://jsonplaceholder.typicode.com/posts';

    private userAuthApiUrl = 'http://192.168.42.3:5001/2.0/users/auth/?key=classicspecs_dev'

    constructor(private http: Http) {}

    /* 
    getPosts(): Observable<LoginInterface[]> {
        return this.http.get(this.postApiUrl)
            .map(res => res.json())
    }
    */

    authUser(userJson):Observable<LoginInterface> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json")

        headers.append("Accept", 'application/json')
        
        let body = JSON.stringify(userJson)

        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this.userAuthApiUrl,
            headers: headers,
            body: JSON.stringify(userJson)
        })

        // return this.http.request(new Request(requestoptions))
        return this.http.post(this.userAuthApiUrl, body, headers)
            .map(res  => res.json())
            
    }
    


}