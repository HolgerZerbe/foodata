import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Search.css'
import {searchProduct, searchById, setProductFoundToFalse} from '../../actions'

class Search extends Component {

    state = {searchTerm:""}
    
    searchProduct = (input) => {
        if (this.state.searchTerm.length>3) {
    
            this.props.searchProduct(this.state.searchTerm)
        }
    
        this.setState({
            searchTerm : input
        })
    }

    componentWillUnmount() {
        this.props.setProductFoundToFalse()
    }

    render() {

        return (
            <>  
                <div>
                    <input type="text" placeholder="search for..." onChange={(e) => this.searchProduct(e.target.value)}></input>
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