import React from "react";
import DrumPad from "./DrumPad";

const drums = [
  {
    id: 1,
    keycode: 81,
    soundname: "Heater 1",
    keyname: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: 2,
    keycode: 87,
    soundname: "Heater 2",
    keyname: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: 3,
    keycode: 69,
    soundname: "Heater 3",
    keyname: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: 4,
    keycode: 65,
    soundname: "Heater 4",
    keyname: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: 5,
    keycode: 83,
    soundname: "Clap",
    keyname: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: 6,
    keycode: 68,
    soundname: "Open HH",
    keyname: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: 7,
    keycode: 90,
    soundname: "Kick n Hat",
    keyname: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: 8,
    keycode: 88,
    soundname: "Kick",
    keyname: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: 9,
    keycode: 67,
    soundname: "Closed HH",
    keyname: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "Let's play drums",
    };

    this.onDisplay = this.onDisplay.bind(this);
  }

  onDisplay(display) {
    this.setState({
      display,
    });
  }

  render() {
    const drum = drums.map((drum) => {
      return (
        <DrumPad
          id={drum.id}
          keyname={drum.keyname}
          src={drum.src}
          key={drum.id}
          keycode={drum.keycode}
          soundname={drum.soundname}
          onDisplay={this.onDisplay}
        />
      );
    });
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <span id="display">{this.state.display}</span>
        <div id="drum-pad">{drum}</div>
      </div>
    );
  }
}

export default DrumMachine;

// audio sources
// https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3
// https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3
// https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3
