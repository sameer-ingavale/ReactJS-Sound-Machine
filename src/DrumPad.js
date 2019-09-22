import React, { Component } from 'react';
import './App.css';

class DrumPad extends Component {

componentDidMount() {
    document.addEventListener('keydown',this.handleKeyDown)
}

handleKeyDown = (event) => {
    if(event.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play()
        this.props.handleDisplay(this.props.id)
    }
}

handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
}

    render() {
        return (
            <div className='button-pack'>
                <div className='drum-pad' onClick = {this.handleClick}  id={this.props.letter}>
                <audio 
                ref={ref => this.audio = ref}
                className = 'clip'
                id={this.props.letter}
                src={this.props.src}>
                </audio>
                <p>{this.props.id}</p>
                </div>
                <div className='key-wrapper'>
                <div className='press-key'>{this.props.letter}</div>
                </div>
        
            </div>
        )
    }
}

export default DrumPad;

