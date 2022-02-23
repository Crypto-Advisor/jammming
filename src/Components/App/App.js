import './App.css';
import Playlist from './Components/Playlist/Playlist'
import SearchBar from 'src/Components/SearchBar/SearchBar.js'
import SearchResults from 'src/Components/SearchResults/SearchResults.js'

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <!-- Add a SearchBar component -->
        <div className="App-playlist">
          <!-- Add a SearchResults component -->
          <!-- Add a Playlist component -->
        </div>
      </div>
    </div>
  );
}

export default App;
