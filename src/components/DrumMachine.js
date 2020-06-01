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
      sliderVol: 0.25,
      power: true,
    };

    this.onDisplay = this.onDisplay.bind(this);

    this.powerFn = this.powerFn.bind(this);

    this.changeVol = this.changeVol.bind(this);
  }

  onDisplay(display) {
    this.setState({
      display,
    });
  }

  powerFn() {
    this.setState({
      power: !this.state.power,
      display: "",
    });
    if (this.state.power === false) {
      this.setState({ display: "Power ON" });
    } else {
      this.setState({ display: "Power OFF" });
    }
  }

  changeVol(e) {
    if (this.state.power) {
      this.setState({
        sliderVol: e.target.value,
        display: "Volume : " + Math.round(e.target.value * 100),
      });
    }
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
          power={this.state.power}
          volume={this.state.sliderVol}
        />
      );
    });

    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>

        <span id="display">{this.state.display}</span>

        <div id="controls">
          <div onClick={this.powerFn} className="powerArea">
            <div className="control">Power</div>
          </div>

          <div className="slider">
            <input
              type="range"
              min="0"
              max="1"
              id="volSlider"
              className="vol"
              step="0.01"
              value={this.state.sliderVol}
              onChange={this.changeVol}
            />
          </div>
        </div>

        <div id="drum-pad">{drum}</div>
      </div>
    );
  }
}

export default DrumMachine;
