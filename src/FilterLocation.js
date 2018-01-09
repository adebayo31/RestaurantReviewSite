import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
            <div className="col-sm-12">
              <div className="col-sm-1">Location:</div>
                <div className="col-sm-3">
                  <label>
                    <input type="radio" name="placeSelector"/> Current Location
                  </label>
                </div>
                <div className="col-sm-5">
                  <label>
                    <input type="radio" name="placeSelector"/> GPS (Lat/Long):&nbsp;
                  </label>
                  <input type="text" name="placeSelector"/>/
                  <input type="text" name="placeSelector"/>
                </div>
                <div className="col-sm-3">
                  <label>
                    <input type="radio" name="placeSelector"/>
                  </label>
                  <label>&nbsp;City&nbsp;
                    <input type="text"/>
                  </label>
                </div>
            </div>
    );
  }
}

export default Map;
