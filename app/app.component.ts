import {Component} from 'angular2/core';
import {LoginComponent} from './login.component'
import {SiteUsers} from './siteusers.component'
import {HomeComponent} from './home.component'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


declare var google : any
declare var map : any

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
                            <li class="active"><a [routerLink]="['Login']">Login</a></li>
                            <li><a [routerLink]="['Users']">Users</a></li> 
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
    
    /* 
    private map
    ngOnInit() {
        var mapProp = {
            center: {lat: -25.363, lng: 131.044},
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        this.additionalMapInfo()
    }

    additionalMapInfo() {
        // set marker
        let marker = new google.maps.Marker({
            position: {lat: -25.363, lng: 131.044},
            map: this.map
        });

        //set info window
        var infowindow = new google.maps.InfoWindow({
            content: "Text goes here"
        });

        //set click event on marker to pop up info-window
        marker.addListener('click', function() {
            infowindow.open(this.map, marker);
        });

    }

    */ 

}