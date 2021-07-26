import React from 'react';
import Button from './Button';
// sounds
import Rimshot from './sounds/q---rimshot.wav.mp3';
import Claves from './sounds/w---claves.wav.mp3';
import Maracas from './sounds/e---maracas.wav.mp3';
import HighHatClap from './sounds/a---cl_hihat.wav.mp3';
import Snare from './sounds/s---snare.wav.mp3';
import HighTom from './sounds/d---hightom.wav.mp3';
import Conga from './sounds/z---conga1.wav.mp3';
import OpenHighHat from './sounds/x---open_hh.wav.mp3';
import CrashCymbal from './sounds/c---crashcym.wav.mp3';
import DisplayText from './DisplayText';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const drums = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    for (let button of drums) {
      if (this.props.name === button) {
        console.log(this.props.name);
      }
    }

    // const audio = document.getElementById(`${this.props.name}`);
    // audio.play();
  }

  componentDidMount() {
    const descriptions = [
      { key: 'Q', text: 'Rimshot 🔊 ' },
      { key: 'W', text: 'Claves 🔊 ' },
      { key: 'E', text: 'Maracas 🔊 ' },
      { key: 'A', text: 'High Hat Clap 🔊 ' },
      { key: 'S', text: 'Snare 🔊 ' },
      { key: 'D', text: 'High Tom 🔊 ' },
      { key: 'Z', text: 'Conga 🔊 ' },
      { key: 'W', text: 'Open High Hat 🔊 ' },
      { key: 'C', text: 'Crash Cymbal 🔊 ' },
    ];

    document.addEventListener('keydown', (e) => {
      const key = e.key.toUpperCase();
      const drums = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
      const boundsCheck = drums.some((buttonPressed) => buttonPressed === key);
      if (boundsCheck) {
        document.getElementById(key).play();
        for (let status of descriptions) {
          if (status['key'] === key) {
            this.setState({
              title: status['text'],
            });
          }
        }
      } else {
        console.log('Key outside drum machine bounds.');
      }
    });
  }

  render() {
    return (
      <div id="machine-inner">
        <div id="display">
          <h1 id="title">Drum Machine</h1>
          <DisplayText title={this.state.title} />
          <div className="drum-row">
            <Button
              name="Q"
              sound={Rimshot}
              text="Rimshot"
              clicked={this.handleClick}
            />
            <Button
              name="W"
              sound={Claves}
              text="Claves"
              clicked={this.handleClick}
            />
            <Button
              name="E"
              sound={Maracas}
              text="Maracas"
              clicked={this.handleClick}
            />
          </div>
          <div className="drum-row">
            <Button
              name="A"
              sound={HighHatClap}
              text="HighHatClap"
              clicked={this.handleClick}
            />
            <Button
              name="S"
              sound={Snare}
              text="Snare"
              clicked={this.handleClick}
            />
            <Button
              name="D"
              sound={HighTom}
              text="HighTom"
              clicked={this.handleClick}
            />
          </div>
          <div className="drum-row">
            <Button
              name="Z"
              sound={Conga}
              text="Conga"
              clicked={this.handleClick}
            />
            <Button
              name="X"
              sound={OpenHighHat}
              text="OpenHighHat"
              clicked={this.handleClick}
            />
            <Button
              name="C"
              sound={CrashCymbal}
              text="CrashCymbal"
              clicked={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
