import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Search.css'
import {searchProduct, searchById, setProductFoundToFalse} from '../../actions'

class Search extends Component {


    componentWillUnmount() {
        // this.props.setProductFoundToFalse()
    }

    render() {

        return (
            <>  
                <div className="inputSearch">
                    <input type="text" placeholder="search for..." onChange={(e) => (e.target.value.length>2 ? this.props.searchProduct(e.target.value) : null)}></input>
                </div>
                <table>
                    <thead>
                        <tr><td>Hersteller</td><td>Produktname</td></tr>
                    </thead>
                    <tbody>
                        {this.props.arrayOfFoundProducts && this.props.arrayOfFoundProducts.map((elem, index) => <tr onClick={() => this.props.searchById(elem.id)}key={index}><td>{elem.hersteller}</td><td>{elem.productname}</td></tr>)}
                    </tbody>
                </table>
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