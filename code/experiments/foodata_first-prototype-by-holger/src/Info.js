import React, { Component } from 'react';
import {connect} from 'react-redux';

class Info extends Component {

    render() {
        return (
            <div className="infoPart" >
            <p className="infoPartP"><b>{this.props.singleproduct.product}</b></p>
            <p className="infoPartP"><span>Nährwertangaben pro</span><span>{this.props.singleproduct.massValue}</span></p>
            <p className="infoPartP"><span>Brennwert:</span><span>{this.props.singleproduct.calorificValue}</span></p>
            <p className="infoPartP"><span>Kohlenhydrate:</span><span>{this.props.singleproduct.carbohydrates} g</span></p>
            <p className="infoPartP"><span>Fett:</span><span>{this.props.singleproduct.fat} g</span></p>
            <p className="infoPartP"><span>Protein:</span><span>{this.props.singleproduct.protein} g</span></p>
            <p className="infoPartP"><span>Salz:</span><span>{this.props.singleproduct.salt} g</span></p>
            </div>
        )
    }
}
// singleproduct:{ id: 1, EAN: ["4060800156525", "4711"], product:"Pepsi Max", trafficColorIndex: 0, massValue: "100 ml", calorificValue: "1 KJ / 0,3 Kcal", carbohydrates: "0,1", fat: "0,1", protein: "0,1", salt: "0,02"}

const mapStateToProps = (state) => ({
    singleproduct: {...state.singleproduct}
})

export default connect(mapStateToProps, null)(Info)