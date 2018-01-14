import React, { Component } from 'react';

export default class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 13,
            maptype: 'roadmap',
            place_formatted: '',
            place_id: '',
            place_location: '',
        };
    }

    componentDidMount() {
        let pos;

        // console.log(window.google);
        if (window.google === null || window.google === undefined){
            document.getElementById("map").innerHTML = "No offline Version is availible";
        } else {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: 48.8589507, lng: 2.2770202},
                zoom: 13,
                mapTypeId: 'roadmap'
            });








            let geocoder = new window.google.maps.Geocoder();
            let infoWindow = new window.google.maps.InfoWindow({map: map});
            let pos = {lat: -33.8688, lng: 151.2195};
                // Try HTML5 geolocation.
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        infoWindow.setPosition(pos);
                        infoWindow.setContent("Location found.");
                        map.setCenter(pos);
                        // Streetview
                new window.google.maps.StreetViewPanorama(
                                document.getElementById("street-view"),
                                {
                                    position: {lat: 48.8589507, lng: 2.2770202},
                                    pov: {heading: 165, pitch: 0},
                                    zoom: 1
                                });
                    }, function () {
                        pos = {
                            lat:  -33.8688,
                            lng: 151.2195
                        };
                        infoWindow.setPosition(pos);
                        infoWindow.setContent("Error: The Geolocation service failed.");
                    });
                } else {
                    // Browser doesn't support Geolocation
                    pos = {
                        lat:  -33.8688,
                        lng: 151.2195
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Error: Your browser doesn't support geolocation.");
                }
        }
    }

    render() {

        return (
            <div>
                <div id="map" />
                <div id="street-view" />
            </div>
        );
    }
};
