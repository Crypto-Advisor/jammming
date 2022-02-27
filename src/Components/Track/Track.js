import './Track.css';
import React from 'react';

class Track extends React.Component{
    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    renderAction(){
        if(this.props.isRemoval){
            return <button onClick={this.removeTrack} className='Track-action'>-</button>
        }
        else{
            return <button onClick={this.addTrack} className='Track-action'>+</button>
        }  
    }
    addTrack(){
        this.props.onAdd(this.props.track)
    }
    removeTrack(){
        this.props.onRemove(this.props.track)
    }
    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <div className='Track-preview'>
                    <audio controls>
                        <source src={this.props.track.preview} type='audio/mpeg'/>
                    Your browser does not support the audio element.
                    </audio>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;