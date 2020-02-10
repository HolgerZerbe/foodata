import React, { Component } from "react";
import ScannerCamera from "./ScannerCamera";
import './Scanner.css'; 

class Scanner extends Component {
  state = {
  camera : false,
  result : null
  }

  onDetected = result => {
    this.setState({result: result})
  };

  componentDidMount(){
    this.setState({camera : !this.camera})
  };
  componentWillUnmount(){
    this.setState({camera : !this.camera})

  };
  render () {
  return (
    <div className="ScannerApp">
      <div className="result">
        <p>{this.state.result ? this.state.result : "Scanning..."}</p>
      </div>
      <div className="containerScanner">
        {this.state.camera && <ScannerCamera onDetected={this.onDetected} />}
      </div>
    </div>
  );
}
}

export default Scanner;
