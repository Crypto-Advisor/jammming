import './App.css';
import Playlist from './Components/Playlist/Playlist'
import SearchBar from 'src/Components/SearchBar/SearchBar.js'
import SearchResults from 'src/Components/SearchResults/SearchResults.js'

function App() {
  constructor(props){
    super(props);
    this.state = { searchResults:[] };
  }


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
