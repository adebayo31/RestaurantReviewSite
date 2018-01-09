import React, { Component } from 'react';
import Comment from "./Comments";
class ListItem extends Component {
  constructor(props){
      super(props);
      this.state = {
        restaurants: this.props.restaurants,
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      // this.props.onChange(event.target.value);
      // this.setState({value: event.target.value});
  }

// {stars: "3", comment: "Meh, it was fine."}
//
    // let rating = "";
    //     "stars": "4",
    // },

  render() {
      let array = this.props.restaurants.ratings;
      let i =0;
      let print = array.map((rating, index) => {
          return <Comment stars={rating.stars} comment={rating.comment} key={i++}/>
      });
      return (
    <a href="#" className="list-group-item">
        <h4 className="list-group-item-heading">{this.state.restaurants.restaurantName}</h4>
        <p className="list-group-item-text">{this.state.restaurants.address_street}</p>
        <p className="list-group-item-text">{this.state.restaurants.address_city}</p>
        {print}
    </a>
    );
  }
}

export default ListItem;
