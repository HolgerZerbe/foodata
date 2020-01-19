import React, { Component } from 'react';
import {connect} from 'react-redux'; 
    

class TrafficLight extends Component {
    trafficColor= [["darkslategrey", "darkslategrey", "green"], ["darkslategrey", "yellow", "darkslategrey"], ["red", "darkslategrey", "darkslategrey"], ["darkslategrey", "darkslategrey", "darkslategrey"]]
    
    render() {
        return (

            <div className="trafficlightPart">
                <div className="trafficlights">
                        
                        {this.trafficColor[this.props.index].map((element, index) =>   <div key={index} className="singlelight" style={{backgroundColor: element}}></div>
)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    index: state.singleproduct.trafficColorIndex 
})

export default connect(mapStateToProps, null)(TrafficLight)
