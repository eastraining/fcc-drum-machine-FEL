import './App.css';
import React from 'react';
import {BasicDrumSounds, MusicLoopsSounds} from './DrumSounds.js'

const DrumPadKeys = [
  "Q",
  "W",
  "E",
  "A",
  "S",
  "D",
  "Z",
  "X",
  "C"
];

function Display(props) {
  return (
    <div id="display-panel">
      <div id="display">
        {props.display}
      </div>
      <button title="Change drumkit style!" className="clickable" onClick={props.handleToggle}>Change Kit</button>
    </div>
  );
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.auxRef = React.createRef();
    this.state = {
      class: "drum-pad"
    }
  }
  handleClick() {
    this.props.handleDisplayChange(this.props.uniqueId);
    this.setState({class: "drum-pad active"})
    setTimeout(() => {
      this.setState({class: "drum-pad"})
    }, 100);
    const sound = this.auxRef.current
    sound.currentTime = 0;
    sound.play();
  }
  handleKeyDown(e) {
    if (e.key.toUpperCase() === this.props.keyValue) {this.handleClick()}
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className={this.state.class} id={this.props.keyValue} onClick={this.handleClick}>
        {this.props.keyValue}
        <audio className="clip" id={this.props.keyValue} ref={this.auxRef} src={this.props.sound}></audio>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Basic Drum",
      binding: "basic",
      keys: this.handleBindingChange("basic")
    }
    this.handleDisplayChange = this.handleDisplayChange.bind(this);
    this.handleBindingChange = this.handleBindingChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleDisplayChange(uniqueId) {
    this.setState({display: uniqueId});
  }
  handleToggle() {
    this.setState(state => {
      const newBinding = state.binding === "basic" ? "loops" : "basic";
      return {
        display: newBinding === "basic" ? "Basic Drum" : "Music Loops",
        binding: newBinding,
        keys: this.handleBindingChange(newBinding)
      }
    });
  }
  handleBindingChange(newBinding) {
    if (newBinding === "basic") {
      return DrumPadKeys.map((val, idx) => [val, BasicDrumSounds[idx][0], BasicDrumSounds[idx][1]]);
    } else {
      return DrumPadKeys.map((val, idx) => [val, MusicLoopsSounds[idx][0], MusicLoopsSounds[idx][1]]);
    }
  }

  render() {
    return (
      <div className="container" id="drum-machine">
        <Display display={this.state.display} handleToggle={this.handleToggle} />
        <div className="drum-pad-wrapper">
          {this.state.keys.map((x, y) => {
            return (
              <DrumPad key={x[0]} keyValue={x[0]} uniqueId={x[1]} sound={x[2]} handleDisplayChange={this.handleDisplayChange} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
