import './TrackList.css';
import React from 'react';
import Track from 'src/Components/Track/Track.js';

export class TrackList extends React.Component{
    render(){
        return(
            <div className="TrackList">
                {this.props.searchResults.map(track => <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)}
                
            </div>
        )
    }
}