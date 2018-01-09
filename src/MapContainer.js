import React, { Component } from 'react';

export default class MapContainer extends Component {
    componentDidMount() {
        // console.log(window.google);
        if (window.google === null || window.google === undefined){
            document.getElementById("map").innerHTML = "No offline Version is availible";
        } else {
            let map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: -33.8688, lng: 151.2195},
                zoom: 13,
                mapTypeId: 'roadmap',
            });
        }
    }

    render() {
        return (
            <div id='map' />
        );
    }
};
