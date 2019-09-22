import React from 'react';
import './App.css';
import logo from './logo.svg';
import DrumPad from './DrumPad';

const data = [{keyCode: 81, keyTrigger: '1', id: '🌋', url: 'http://allacrost.org/staff/user/hamiko/quake2.wav'}, 
                {keyCode: 87, keyTrigger: '2', id: '💧', url: 'http://home.teleport.com/~donmisc1/smallwaterfall.wav'}, 
                {keyCode: 69,keyTrigger: '3',id: '⚡',url: 'http://solberg.snr.missouri.edu/People/fox/atm050/THUNDR03.WAV'}, 
                {keyCode: 65,keyTrigger: '4',id: '🔫',url: 'http://soundfxcenter.com/video-games/halo-3/8d82b5_Halo_3_Plasma_Rifle_Short_Burst_Sound_Effect.mp3'}, 
                {keyCode: 83,keyTrigger: '5',id: '💣',url: 'http://tastyspleen.net/~quake2/baseq2/sound/weapons/rocklx1a.wav'}, 
                {keyCode: 68,keyTrigger: '6',id: '🗡️',url: 'http://csfiles.maniapc.org/cs/sound/weapons/knifedragon_hit1.wav'}, 
                {keyCode: 90,keyTrigger: '7',id: "🦅",url: 'http://gameislands.net/gamecontent/Data/Sounds/eagle.wav'}, 
                {keyCode: 88,keyTrigger: '8',id: '🐷',url: 'http://www.vertigogaming.org/downloads/svencoop/sound/sc_psyko/pig.wav'}, 
                {keyCode: 67,keyTrigger: '9',id: '🦖',url: 'http://jp.popapostle.com/sounds/JP/roar.wav'},
        ];

class DrumMachine extends React.Component {
        constructor(props) {
                super(props);

                this.state = {
                        display: '🔊'
                }

                this.handleDisplay = this.handleDisplay.bind(this);

        }

        handleDisplay = (inputDisplay) => ( this.setState({display: inputDisplay}))

        render() {

                return (
                        <div id='drum-machine'>
                                <div id='display'>{this.state.display}</div>
                            <div className='drum-pack'>
                            {data.map(d => (
                                <DrumPad letter={d.keyTrigger} src={d.url} id={d.id} handleDisplay={this.handleDisplay}/>
                            ))}  
                            </div>
                            <div className='footer'>
                                <p id='credits'>Click emoji buttons or press num keys for sound. Designed by Sameer Ingavale</p> 
                                <img src={logo} className="React-logo" alt="react-logo" />
                            </div>
      </div>
                )
        }
}

export default DrumMachine;
