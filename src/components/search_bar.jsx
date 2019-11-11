import React, { Component } from 'react';

// To allow someone to type into the search bar
// To capture what they are typing

class SearchBar extends Component {
  // create a method that captures user's search items
  // now the event needs to take this information and store it (state)

  eventHandler (event) {
  //  console.log(event.target.value)
    // this.setState({event.target.value})
  }

  render() {
    return (
      <div>
        <input className ="form-search form-control" onChange= {this.eventHandler}></input>
      </div>
    )};
}


export default SearchBar
