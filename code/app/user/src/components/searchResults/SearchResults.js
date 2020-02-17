import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {setProductFoundToFalse} from '../../actions';


class SearchResults extends Component {
    
    state = {
        colorStyle:['#32CD32','#ffbf00','#ff0000', '#cdd0d4'],
        fatBG: `#cdd0d4`,
        satFatBG: `#cdd0d4`,  
        sugarBG: `#cdd0d4`,  
        saltBG: `#cdd0d4`
        
    }
    
    fat= "";
    satFat="";
    sugar="";
    salt ="";


    tlScoring = (i,elementToChange) => {   
        this.setState({[elementToChange]: this.state.colorStyle[i]})
   }

    fatTlCalcFood = (fat) => {

    if(fat < 3) {return 0}        
    else if(fat >= 3 && fat <= 17.5) {return 1}     
    else if(fat > 17.5) {return 2}      
    else return 3
    ;    
};

// 1.1.2 Calculation Tl Food "satFat"

    satFatTlCalcFood = (satFat) => {

    if(satFat <= 1.5) {return 0}           
    else if(satFat >= 1.5 && satFat <= 5) {return 1}       
    else if(satFat > 5) {return 2}    
    else return 3;    
};
// 1.1.3 Calculation Tl Food "sugars"

    sugarsTlCalcFood = (sugars) => {
    if(sugars < 5) {return 0}
    else if(sugars >= 5 && sugars <= 22.5) {return 1}   
    else if(sugars > 22.5) {return 2}
    else return 3;    
};

// 1.1.4 Calculation Tl Food "salt"

    saltTlCalcFood = (salt) => {    
    if(salt < 0.3) {return 0
    }
    else if(salt >= 0.3 && salt <= 1.5) {return 1}    
    else if(salt > 1.5) {return 2}
    else return 3;    
};

// 1.2 Calculations Tl Drinks

// 1.2.1 Calculation Tl Drinks "fat"

    fatTlCalcDrinks = (fat) => {
    if(fat < 1.5) {return 0}
    else if(fat >= 1.5 && fat <= 8.75) {return 1}    
    else if(fat > 8.75) {return 2}
    else return 3;    
};

// 1.2.2 Calculation Tl Drinks "satFat"

    satFatTlCalcDrinks = (satFat) => {
    if(satFat < 0.75) {return 0}
    else if(satFat >= 0.75 && satFat <= 2.5) {return 1}    
    else if(satFat > 2.5) {return 2}
    else return 3;    
};

// 1.2.3 Calculation Tl Drinks "sugars"

    sugarsTlCalcDrinks = (sugars) => {
    if(sugars < 2.5) {return 0}
    else if(sugars >= 2.5 && sugars <= 11.25) {return 1}    
    else if(sugars > 11.25) {return 2}
    else return 3;    
};

// 1.2.4 Calculation Tl Drinks "salt"

    saltTlCalcDrinks = (salt) => {

    if(salt < 0.3) {return 0}
    else if(salt >= 0.3 && salt <= 1.5) {return 1}    
    else if(salt > 1.5) {return 2}
    else return 3;    
};

    replacePoints = () => {
        this.fat = parseFloat(this.props.product.fett).toFixed(1).toString().replace('.', ',');
        this.satFat = parseFloat(this.props.product.gesaettigteFettsaeuren   ).toFixed(1).toString().replace('.', ',');
        this.sugar = parseFloat(this.props.product.zucker).toFixed(1).toString().replace('.', ',');
        this.salt = ((Math.round(parseFloat(this.props.product.natrium)*2.54*10))/10).toFixed(1).toString().replace('.', ',')
    }

componentWillUnmount() {
    this.props.setProductFoundToFalse()
}

componentDidMount() {
    
    if(this.props.error === 0 && this.props.product.productGroup && (this.props.product.productGroup.toLowerCase()==="getraenk" || this.props.product.productGroup.toLowerCase() === "wasser")) {
         this.replacePoints();
         this.tlScoring(this.fatTlCalcDrinks(parseFloat(this.props.product.fett)), "fatBG");        
         this.tlScoring(this.satFatTlCalcDrinks(parseFloat(this.props.product.gesaettigteFettsaeuren)),"satFatBG");
         this.tlScoring(this.sugarsTlCalcDrinks(parseFloat(this.props.product.zucker)),"sugarBG");
         this.tlScoring(this.saltTlCalcDrinks(parseFloat(this.props.product.natrium*0.388)),"saltBG");                 
     }
     else if (this.props.error===0 && this.props.product.productGroup){
         this.replacePoints();
         this.tlScoring(this.fatTlCalcFood(parseFloat(this.props.product.fett)), "fatBG");        
         this.tlScoring(this.satFatTlCalcFood(parseFloat(this.props.product.gesaettigteFettsaeuren)), "satFatBG");
         this.tlScoring(this.sugarsTlCalcFood(parseFloat(this.props.product.zucker)), "sugarBG");
         this.tlScoring(this.saltTlCalcFood(parseFloat(this.props.product.natrium*0.388)), "saltBG");
    
    };
}


render() {
    

        return (
        <div className="searchResults_div">
            {this.props.error===0? 
            <>
           
                <p className="titleResults">Hersteller: {this.props.product.hersteller}</p>
                <p className="titleResults">Produktname: {this.props.product.productname}</p>
            <div className="trafficLight">
                <div className="singleTrafficLight">
                    <div className="light" style={{background: this.state.fatBG}}></div><div className="singleTrafficLightText">Fett: {this.fat} g</div></div>
                <div className="singleTrafficLight">
                    <div className="light" style={{background: this.state.satFatBG}}></div><div className="singleTrafficLightText">Gesättigte Fette: {this.satFat} g</div></div>
                <div className="singleTrafficLight">
                <div className="light" style={{background: this.state.sugarBG}}></div><div className="singleTrafficLightText">Zucker: {this.sugar} g</div></div>
                <div className="singleTrafficLight"> 
                <div className="light" style={{background: this.state.saltBG}}></div><div className="singleTrafficLightText">Salz: {this.salt} g</div></div>

            </div> 
            </>
                : <ErrorMessage fehlerNummer = {this.props.error}/>}
                
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product,
    productFound: state.productFound,
    error: state.error,
    message: state.message
})

export default connect(mapStateToProps,{setProductFoundToFalse})(SearchResults);
