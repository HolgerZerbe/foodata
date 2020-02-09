import React, { Component } from "react";
import ScannerCamera from "./ScannerCamera";
import {connect} from 'react-redux';
import {loadProduct} from '../../actions';

class Scanner extends Component {
  state = {
  camera : false
  }

  onDetected = result => {
    this.props.loadProduct(result)
  };

  componentDidMount(){
    this.setState({camera : !this.camera})
  };
  componentWillUnmount(){
    this.setState({camera : !this.camera})

  };
  render () {
    console.log(this.props)

  return (
    <div className="ScannerApp">
      <p>{(this.props.error===0) ? (this.props.product.productname) : "Scanning..."}</p>
      <div className="containerScanner">
        {this.state.camera && <ScannerCamera onDetected={this.onDetected} />}
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  product: state.product,
  error: state.error
})

export default connect(mapStateToProps, {loadProduct})(Scanner);
