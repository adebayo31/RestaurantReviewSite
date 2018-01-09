import React, { Component } from 'react';
import './App.css';
import MapContainer from "./MapContainer";
import List from "./List";
import FilterLocation from "./FilterLocation";
import FilterRating from "./FilterRating";
import leftImage from "./assets/images/photo-1458644267420-66bc8a5f21e4.jpeg";
import rightImage from "./assets/images/photo-1513772457252-c0417654a2a0.jpeg";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            restaurants:  [
                {
                    key: 1,
                    "restaurantName": "Bronco",
                    "address_street": "39 Rue des Petites Écuries",
                    "address_city": "75010 Paris",
                    "lat": "48.8737815",
                    "long": "2.3501649",
                    "ratings": [
                        {
                            "stars": "4",
                            "comment": "Great! But not many veggie options."
                        },
                        {
                            "stars": "5",
                            "comment": "My favorite restaurant!"
                        }
                    ]

                },
                {
                    key: 2,
                    "restaurantName": "Babalou",
                    "address_street": "4 Rue Lamarck",
                    "address_city": "75018 Paris",
                    "lat": "48.8865035",
                    "long": "2.3442197",
                    "ratings": [
                        {
                            "stars": "5",
                            "comment": "Tiny pizzeria next to Sacre Coeur!"
                        },
                        {
                            "stars": "3",
                            "comment": "Meh, it was fine."
                        }
                    ]
                }
            ]
        };
        this.changeRestaurants = this.changeRestaurants.bind(this);
    }


    changeRestaurants(event){
        this.setState({
            physical: event
        })
        console.log("changeRestaurants", event);
    }

    render() {
    return (
        <div className="container">
            <header className="App-header">
                <div className="col-sm-12">
                    <div className="col-sm-2">
                        <img src={leftImage} className="left-image" alt="Seafood" height="75px" />
                    </div>
                    <div className="col-sm-8">
                        <h1 className="App-title">Alexander's Restaurant Guide</h1>
                    </div>
                    <div className="col-sm-2">
                        <img src={rightImage} className="right-image" alt="Seafood" height="75px"/>
                    </div>
                </div>
            </header>
            <div className="row">
                <FilterLocation/>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-8">
                        <div><MapContainer /></div>
                    </div>
                    <div className="col-sm-4">
                        <FilterRating/>
                        <List restaurants={this.state.restaurants}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default App;

