import React, { Component } from 'react';
import ListItem from "./ListItem";

class List extends Component {
    render() {
      let rows = this.props.restaurants.map((rest) => {
        // console.log(rows);
         return (
           <ListItem restaurants={rest} key={rest.key} />
         );
      });
      return (
      <div className="list-group">
          {rows}
    </div>
    );
  }
}

export default List;
