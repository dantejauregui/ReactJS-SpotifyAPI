import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: null,
      q: "",
    };

    this.dante = this.dante.bind(this);
    this.changing = this.changing.bind(this);
  }

  dante() {
    fetch(`https://api.spotify.com/v1/search?q=${this.state.q}&type=artist`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ artist: data.artists.items[0] })
      })

    console.log(this.state.artist);
  }


  changing(e) {
    this.setState({q: e.target.value});
    
  }


  render() {
    console.log(this.state.q);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Spotify API Results</h2>
          <input onChange={this.changing} type="text" placeholder="Busque su autor favorito..." />
          <button id="test" onClick={this.dante}>Buscar</button>
        </div>
        
        {
          this.state.artist == null ? 
          (
            <p>...</p>
            ):

          (
            <div className="App-body">

              <img className="App-img" src={this.state.artist.images[1].url} alt="dante"></img>
              <p>{this.state.artist.name}</p>

            </div>
          )
        }
      </div>
    );
  }
}

export default App;
