import React from "react";
import "./App.scss";
import DrumMachine from "./components/DrumMachine";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DrumMachine />
      </div>
    );
  }
}

export default App;
