import React from 'react';

function Button(props) {
  return (
    <button id={props.text} className="drum-pad" onClick={props.clicked}>
      {props.name}
      <audio
        className="clip"
        id={props.name}
        src={props.sound}
        type="audio/mpeg"
      />
    </button>
  );
}

export default Button;
