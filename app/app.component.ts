import {Component} from 'angular2/core';
import {LoginComponent} from './login.component'
import {SiteUsers} from './siteusers.component'

declare var google : any
declare var map : any

@Component({
    selector: 'my-app',
    template: `
        <login></login>
        <site-users></site-users>
    `,
    directives: [LoginComponent, SiteUsers]
})
export class AppComponent { 
    
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

}