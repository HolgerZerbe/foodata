import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Search.css'
import {searchProduct, searchById, setProductFoundToFalse} from '../../actions'

class Search extends Component {


    componentWillUnmount() {
        this.props.setProductFoundToFalse()
    }

    render() {

        return (
            <>  
                <div>
                    <input type="text" placeholder="search for..." onChange={(e) => (e.target.value.length>2 ? this.props.searchProduct(e.target.value) : null)}></input>
                </div>
                {this.props.error===0 && this.props.arrayOfFoundProducts.map((elem, index) => <div key={index}>{elem.hersteller} {elem.productname}</div>)}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    arrayOfFoundProducts: state.arrayOfFoundProducts,
    error: state.error,
    message: state.message,
    productFound: state.productFound
})


export default connect(mapStateToProps, {searchProduct, searchById, setProductFoundToFalse})(Search)