import React, {Component} from 'react';
import './App.css';
import Welcome from './Welcome'
import TrafficLight from './TrafficLight';
import Info from './Info';
import Nav from './Nav';
import {connect} from 'react-redux';

class App extends Component {

  render (){
    return (
      <div style = {{display: "flex", justifyContent: "space-between", height:"100%"}}>
      {this.props.showWelcome? <Welcome /> : null}
      {this.props.showTrafficLightAndInfo? <TrafficLight /> : null}
      {this.props.showTrafficLightAndInfo? <Info /> : null}
      <Nav />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
        showWelcome: state.showWelcome,
        showTrafficLightAndInfo: state.showTrafficLightAndInfo,
        showScanning: state.showScanning,
        showInput: state.showInput
})
export default connect(mapStateToProps, null)(App);
