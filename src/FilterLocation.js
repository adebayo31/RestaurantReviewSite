import React, { Component } from 'react';

class FilterLocation extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
        };
        this.selectionChanged = this.selectionChanged.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    selectionChanged(event){
      console.log(event);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

  render() {
      let input = document.getElementById("pac-input");
      // Create the search box and link it to the UI element.
      // var searchBox = new window.google.maps.places.SearchBox(input);
      // document.map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

      return (
            <div className="col-sm-12">
              <div className="col-sm-1">Location:</div>
                <div className="col-sm-2">
                  <label>
                    <input type="radio" name="placeSelector" defaultChecked value="current" onChange={this.handleCheck}/> Current Location
                  </label>
                </div>
                <div className="col-sm-5">
                  <label>
                    <input type="radio" name="placeSelector" onChange={this.handleCheck} value="GPS"/> GPS (Lat/Long):&nbsp;
                  </label>
                  <input type="text" name="lat"/>/
                  <input type="text" name="long"/>
                </div>
                <div className="col-sm-3">
                  <label>
                    <input type="radio" name="placeSelector" value="city" onChange={this.selectionChanged}/>
                  </label>
                  <label>&nbsp;City&nbsp;
                    <input id="pac-input" className="controls" type="text" onChange={this.handleChange} placeholder="Search Box"/>
                  </label>
                </div>
              <div className="col-sm-1">
                <label>
                  <button>Search</button>
                </label>
              </div>
            </div>
    );
  }
}

export default FilterLocation;


/*
 // Bias the SearchBox results towards current map's viewport.
 map.addListener('bounds_changed', function() {
 searchBox.setBounds(map.getBounds());
 });

 var markers = [];
 // Listen for the event fired when the user selects a prediction and retrieve
 // more details for that place.
 searchBox.addListener('places_changed', function() {
 var places = searchBox.getPlaces();

 if (places.length == 0) {
 return;
 }


 // Clear out the old markers.
 markers.forEach(function(marker) {
 marker.setMap(null);
 });
 markers = [];

 // For each place, get the icon, name and location.
 var bounds = new google.maps.LatLngBounds();
 places.forEach(function(place) {
 if (!place.geometry) {
 console.log("Returned place contains no geometry");
 return;
 }
 var icon = {
 url: place.icon,
 size: new google.maps.Size(71, 71),
 origin: new google.maps.Point(0, 0),
 anchor: new google.maps.Point(17, 34),
 scaledSize: new google.maps.Size(25, 25)
 };

 // Create a marker for each place.
 markers.push(new google.maps.Marker({
 map: map,
 icon: icon,
 title: place.name,
 position: place.geometry.location
 }));

 if (place.geometry.viewport) {
 // Only geocodes have viewport.
 bounds.union(place.geometry.viewport);
 } else {
 bounds.extend(place.geometry.location);
 }
 });
 map.fitBounds(bounds);
 });
 }

 * */