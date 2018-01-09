import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
              <div className="col-sm-12">
                  <div className="col-sm-2">From: </div>
                  <div className="col-sm-2"><input type="number" min="0" max="5" steps="1" defaultValue="1"/></div>
                  <div className="col-sm-2"> To: </div>
                  <div className="col-sm-2"><input type="number" min="0" max="5" steps="1" defaultValue="5"/></div>
                  <div className="col-sm-2"> Stars</div>
              </div>
    );
  }
}

export default Map;
