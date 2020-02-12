import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Search.css'
import {searchProduct, searchById, emptyArrayOfFoundProducts} from '../../actions'

class Search extends Component {

    componentWillUnmount() {
        this.props.emptyArrayOfFoundProducts()
    }

    render() {

        return (
            <>  
                <div className="inputSearch">
                    <input type="text" placeholder="Geben Sie bis zu drei Suchbegriffe ein" autoFocus onChange={(e) => (e.target.value.length>2 ? this.props.searchProduct(e.target.value) : this.props.emptyArrayOfFoundProducts())}></input>
                    <p>Die Suche startet automatisch nach<br />der Eingabe von mindestens drei Zeichen...</p>
                </div>
                <div className="tableSearch">
                <table>
                    <thead>
                        {this.props.arrayOfFoundProducts && this.props.arrayOfFoundProducts.length>0 ? <tr><td>Hersteller</td><td>Produktname</td></tr> : null}
                    </thead>
                    <tbody>
                        {this.props.arrayOfFoundProducts && this.props.arrayOfFoundProducts.map((elem, index) => <tr onClick={() => this.props.searchById(elem.id)}key={index}><td>{elem.hersteller}</td><td>{elem.productname}</td></tr>)}
                    </tbody>
                </table>
                        {this.props.arrayOfFoundProducts && this.props.arrayOfFoundProducts.length>0 ? <p className="searchInfo">Bitte auf den entsprechende Artikel klicken</p> : null}
                </div>
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


export default connect(mapStateToProps, {searchProduct, searchById, emptyArrayOfFoundProducts})(Search)