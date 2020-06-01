import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.playAudio = this.playAudio.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.key.toUpperCase().charCodeAt() === this.props.keyname.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.onDisplay(this.props.soundname);
    }
  }

  playAudio(e) {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.onDisplay(this.props.soundname);
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.playAudio}>
        <h1>{this.props.keyname}</h1>
        <audio
          className="clip"
          type="audio/mp3"
          id={this.props.keyname}
          src={this.props.src}
          ref={(ref) => (this.audio = ref)}
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
