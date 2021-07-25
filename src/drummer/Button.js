import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const audio = document.getElementById(`${this.props.name}`);
    audio.play();
  }

  render() {
    return (
      <button
        id={this.props.text}
        className="drum-pad"
        onClick={this.handleClick}>
        {this.props.name}
        <audio
          className="clip"
          id={this.props.name}
          src={this.props.sound}
          type="audio/mpeg"
        />
      </button>
    );
  }
}

export default Button;
