import './App.css';
import React from 'react'

import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'

import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchResults:[], playlistName:"My Playlist", playlistTracks:[] };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    let contain_bool = false;
    this.state.playlistTracks.forEach((x) =>{
      if(x.id === track.id){
        contain_bool = true;
      }
    })
    if(!contain_bool){
      let newState = this.state.playlistTracks
      newState.push(track)
      this.setState({ playlistTracks:newState })
    }
  }

  removeTrack(track){
    let newState = this.state.playlistTracks
    for(let i = 0;i<newState.length;i++){
      if(newState[i].id === track.id){
        newState.splice(i, 1);
      }
    }
    this.setState({ playlistTracks:newState })
  }

  updatePlaylistName(in_name){
    this.setState({ playlistName:this.in_name })
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() =>{
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term){
    Spotify.search(term).then(searchResults =>{
      this.setState({ searchResults:searchResults})
    })
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
