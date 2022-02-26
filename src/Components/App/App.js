import './App.css';
import Playlist from './Components/Playlist/Playlist'
import SearchBar from 'src/Components/SearchBar/SearchBar.js'
import SearchResults from 'src/Components/SearchResults/SearchResults.js'

function App() {
  constructor(props){
    super(props);
    this.state = { searchResults:[], playlistName:"Name", playlistTracks:[] };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
