import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gifs = [
      { id:"QsnQsvAkrkKGiHZuo8"},
      { id:"xT9IgDEI1iZyb2wqo8"}
    ]
    return (
      <div>
        <div className="left-scene">
        {/* take the information and pass it into the giphy */}
          <SearchBar/>
          <div className="selected-gif">
            <Gif id="QsnQsvAkrkKGiHZuo8"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    )
  };
};


export default App

// id for cat:QsnQsvAkrkKGiHZuo8
// id for lewagon: xT9IgDEI1iZyb2wqo8
