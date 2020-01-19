import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadProduct} from './actions'
class Nav extends Component {

    render() {
        return (
            <div className="navPart" >
                <p className="navPartP">Zum Scannen hier klicken:</p>
                <button className="navPartBtn" onClick={()=> this.props.loadProduct(4711)}>Produkt scannen</button>
                <p className="navPartP">Produkt manuell suchen:</p>
                <button className="navPartBtn">Produkt suchen</button>
                <p className="navPartP">Produkt nicht gefunden? Anfragen:</p>
                <button className="navPartBtn">Produkt anfragen</button>
                <p className="navPartP">---------</p>
                <button className="navPartBtn">Admin</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments
})

export default connect(mapStateToProps, {loadProduct})(Nav)