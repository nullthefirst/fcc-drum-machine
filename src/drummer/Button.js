import React from 'react';

function Button(props) {
  return (
    <button
      id={props.name}
      className="drum-pad"
      // onClick={() => alert(`${props.name} pressed!`)}
    >
      {props.name}
    </button>
  );
}

export default Button;
