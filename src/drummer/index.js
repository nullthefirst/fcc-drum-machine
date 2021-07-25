import React from 'react';
import Button from './Button';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="machine-inner">
        <div id="display">
          <h1 id="title">Drum Machine</h1>
          <div className="drum-row">
            <Button name="Q" />
            <Button name="W" />
            <Button name="E" />
          </div>
          <div className="drum-row">
            <Button name="A" />
            <Button name="S" />
            <Button name="D" />
          </div>
          <div className="drum-row">
            <Button name="Z" />
            <Button name="X" />
            <Button name="C" />
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
