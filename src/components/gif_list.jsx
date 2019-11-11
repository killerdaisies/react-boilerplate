import React, { Component } from 'react';
import Gif from './gif.jsx'

class GifList extends Component {
  render() {
    // TODO: it should return a list of gifs, info that is getting passed into it is an array of IDs. This has been passed from the app, now you need to this.props.gifs.map to map each array into each gif's id
    return (
      <div className="gif-list">
        <Gif />,<Gif />,<Gif />
      </div>
    )
  };
}


export default GifList
