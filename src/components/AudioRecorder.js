import React, { Component } from "react";
import "./AudioRecorder.css";
import { bgColor, fontColor } from '../Config.js'
import { Transition } from "react-transition-group";
// import { ReactMic } from "react-mic";
import {transitionStyles, defaultStyle, darkFocus } from "../Config.js";

let ReactMic;
class AudioRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      downloadLinkURL: null,
    };
    if (!ReactMic) {
      try {
        ReactMic = require("react-mic").ReactMic;
      } catch (err) {
        console.log(err);
      }
    }
  }

  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };

  onData = (recordedBlob) => {
    // console.log('chunk of real-time data is: ', recordedBlob);
  };

  onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    this.props.newRecording(
      new File([recordedBlob.blob], "recording.wav", {
        type: "audio/wav",
        lastModified: Date.now(),
      })
    );
    // this.props.newRecording(recordedBlob.blobURL)
  };

  onSave = (recordedBlob) => {
    this.setState({
      downloadLinkURL: recordedBlob.blobURL,
    });
  };

  render() {
    return (
      <div id="recorder-container">
        <div className="horizontal-recorder">
          {!this.state.record &&
        <button
          className="record-button record"
          onClick={this.startRecording}
          type="button"
        >
          Record
        </button>
  }
{this.state.record &&
        <button
          className="record-button record"
          onClick={this.stopRecording}
          type="button"
        >
          Stop recording
        </button>}
        </div>
        <Transition timeout={300} in={!this.state.record && this.state.downloadLinkURL}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
        <a
          className="record download"
          href={this.state.downloadLinkURL}
          download="recording.wav"
        >
          Download
        </a>
        </div>
        )}
      </Transition>
        <Transition timeout={300} in={this.state.record}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
        <ReactMic
          record={this.state.record}
          className="sound-wave visualization"
          onStop={this.onStop}
          onData={this.onData}
          onSave={this.onSave}
          strokeColor={darkFocus}
          backgroundColor={`transparent`}
          mimeType="audio/wav"
          width={225}
          height={30}
          noiseSuppression={true}
        />
        </div>
        )}
      </Transition>
      </div>
    );
  }
}

export default AudioRecorder;
