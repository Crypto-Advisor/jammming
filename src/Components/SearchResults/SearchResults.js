import './SearchResults.css';
import TrackList from 'src/Components/TrackList/TrackList.js';
import React from 'react';

export class SearchResults extends React.Component{
    render(){
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList searchResults={this.props.SearchResults}/>
            </div>
        )
    }
}