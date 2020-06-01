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
    if (this.props.power) {
      if (
        e.key.toUpperCase().charCodeAt() === this.props.keyname.charCodeAt()
      ) {
        this.audio.pause();
        this.audio.currentTime = 0;
        let promise = this.audio.play();
        if (promise !== undefined) promise.catch(function () {});
        this.props.onDisplay(this.props.soundname);
        this.audio.volume = this.props.volume;
      }
    }
  }

  playAudio(e) {
    if (this.props.power) {
      this.audio.pause();
      this.audio.currentTime = 0;
      let promise = this.audio.play();
      if (promise !== undefined) promise.catch(function () {});
      this.props.onDisplay(this.props.soundname);
      this.audio.volume = this.props.volume;
    }
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.playAudio}>
        <h2>{this.props.keyname}</h2>
        <audio
          className="clip"
          type="audio/mp3"
          preload="none"
          id={this.props.keyname}
          src={this.props.src}
          ref={(ref) => (this.audio = ref)}
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
