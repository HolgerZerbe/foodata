import React, { Component } from 'react';
import Quagga from 'quagga';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#barcode-scanner')    // Or '#yourElement' (optional)
      },
      decoder : {
        readers : ["code_128_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });    
  }
  
  render() {
    return (
      <div>
        Quagga-Test
        <div id="barcode-scanner"></div>
      </div>
    );
  }
}

export default App;