import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {setProductFoundToFalse} from '../../actions';
import TrafficLight from '../trafficLight/TrafficLight';
import NutriScore from '../nutriScore/NutriScore';

class SearchResults extends Component {
    
    state = {
        nutriscore: "Z",
        colorStyle:['green','yellow','red', 'grey'],
        fatBG: `grey`,
        satFatBG: `grey`,  
        sugarBG: `grey`,  
        saltBG: `grey`
        
    }
    
    fat= "";
    satFat="";
    sugar="";
    salt ="";
    

// 1. CALCULATION TRAFFIC LIGHT

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

// 2. CALCULATION NUTRISCORE

// 2.1   Calculations Nutri-score "negative nutriments"
//
// 2.1.1 Calculation Nutri-score "Energy in kcal/g"

energyNutriCalc = (energy) => {

    if(energy <= 80) {return 0}
    else if(energy >  80 && energy <= 160) {return 1}
    else if(energy > 160 && energy <= 240) {return 2}
    else if(energy > 240 && energy <= 320) {return 3}
    else if(energy > 320 && energy <= 400) {return 4}
    else if(energy > 400 && energy <= 480) {return 5}
    else if(energy > 480 && energy <= 560) {return 6}
    else if(energy > 560 && energy <= 640) {return 7}
    else if(energy > 640 && energy <= 720) {return 8}
    else if(energy > 720 && energy <= 800) {return 9}
    else if(energy > 800) {return 10}    
};

// 2.1.2 Calculation Nutri-score "saturated fats"

satFatNutriCalc = (satfat) => {
    if(satfat <= 1) {return 0}
    else if(satfat > 1 && satfat<= 2) {return 1}
    else if(satfat > 2 && satfat<= 3) {return 2}
    else if(satfat > 3 && satfat<= 4) {return 3}
    else if(satfat > 4 && satfat<= 5) {return 4}
    else if(satfat > 5 && satfat<= 6) {return 5}
    else if(satfat > 6 && satfat<= 7) {return 6}
    else if(satfat > 7 && satfat<= 8) {return 7}
    else if(satfat > 8 && satfat<= 9) {return 8}
    else if(satfat > 9 && satfat<= 10) {return 9}
    else if(satfat > 10) {return 10}     
};

// 2.1.3 Calculation Nutri-score "sugars"

sugarsNutriCalc = (sugars) => {
    if(sugars <= 4.5) {return 0}
    else if(sugars > 4.5 && sugars<= 9) {return 1}
    else if(sugars > 9 && sugars<= 13.5) {return 2}
    else if(sugars > 13.5 && sugars<= 18) {return 3}
    else if(sugars > 18 && sugars<= 22.5) {return 4}
    else if(sugars > 22.5 && sugars<= 27) {return 5}
    else if(sugars > 27 && sugars<= 31) {return 6}
    else if(sugars > 31 && sugars<= 36) {return 7}
    else if(sugars > 36 && sugars<= 40) {return 8}
    else if(sugars > 40 && sugars<= 45) {return 9}
    else if(sugars > 45) {return 10}      
};

// 2.1.4 Calculation Nutri-score "sodium"

sodiumNutriCalc = (sodium) => {
    
    if(sodium <= 0.09) {return 0}
    else if(sodium > 0.09 && sodium <= 1.8) {return 1}
    else if(sodium > 1.8 && sodium <= 2.7) {return 2}
    else if(sodium > 2.7 && sodium <= 3.6) {return 3}
    else if(sodium > 3.6 && sodium <= 4.5) {return 4}
    else if(sodium > 4.5 && sodium <= 5.4) {return 5}
    else if(sodium > 5.4 && sodium <= 6.3) {return 6}
    else if(sodium > 6.3 && sodium <= 7.2) {return 7}
    else if(sodium > 7.2 && sodium <= 8.1) {return 8}
    else if(sodium > 8.1 && sodium <= 9) {return 9}
    else if(sodium > 9) {return 10}       
};

// 2.1.5 Calculation Nutri-score "ratio satFats/fats"

ratioFatsNutriCalc = (fat,satfat) => {
    if (fat===0) {return 0}
    else if((satfat/fat) < 0.10) {return 0}
    else if((satfat/fat) >= 0.10 && (satfat/fat)< 0.16) {return 1}
    else if((satfat/fat) >= 0.16 && (satfat/fat)< 0.22) {return 2}
    else if((satfat/fat) >= 0.22 && (satfat/fat)< 0.28) {return 3}
    else if((satfat/fat) >= 0.28 && (satfat/fat)< 0.34) {return 4}
    else if((satfat/fat) >= 0.34 && (satfat/fat)< 0.40) {return 5}
    else if((satfat/fat) >= 0.40 && (satfat/fat)< 0.46) {return 6}
    else if((satfat/fat) >= 0.46 && (satfat/fat)< 0.52) {return 7}
    else if((satfat/fat) >= 0.52 && (satfat/fat)< 0.58) {return 8}
    else if((satfat/fat) >= 0.58 && (satfat/fat)< 0.64) {return 9}
    else if((satfat/fat) >= 0.64) {return 10}  
};

// 2.2   Calculations Nutri-score "positive nutriments"

// 2.2.1 Calculation Nutri-score "fruits, vegetables, nuts (healthyIng/ healthy Ingredients)"

healthyIngNutriCalc = (healthyIng) => {
    if(healthyIng <= 40) {return 0}
    else if(healthyIng > 40 && healthyIng <= 60) {return 1}
    else if(healthyIng > 60 && healthyIng <= 80) {return 2}      
    else if(healthyIng > 80) {return 5}       
};

// 2.2.2 Calculation Nutri-score "fibres"

fibresCalc = (fibres) => {

    if(fibres <= 0.9) {return 0}
    else if(fibres > 0.9 && fibres <= 1.9) {return 1}
    else if(fibres > 1.9 && fibres <= 2.8) {return 2}
    else if(fibres > 2.8 && fibres <= 3.7) {return 3}
    else if(fibres > 3.7 && fibres <= 4.7) {return 4}    
    else if(fibres > 4.7) {return 5}       
};;

// 2.2.3 Calculation Nutri-score "proteins"

proteinsCalc =(proteins) => {

;    if(proteins <= 1.6) {return 0}
    else if(proteins > 1.6 && proteins <= 3.2) {return 1}
    else if(proteins > 3.2 && proteins <= 4.8) {return 2}
    else if(proteins > 4.8 && proteins <= 6.4) {return 3}
    else if(proteins > 6.4 && proteins <= 8.0) {return 4}    
    else if(proteins > 8.0) {return 5}       
};

// 2.3    Calculations Nutri-score "drinks modified"
//
// 2.3.1 Calculation Nutri-score "Energy in kcal/g (Drinks modified)"

energyNutriDCalc = (energy) => {
    if(energy === 0) {return 0}
    else if(energy >  0 && energy <= 7) {return 1}
    else if(energy >  7 && energy <= 14) {return 2}
    else if(energy > 14 && energy <= 22) {return 3}
    else if(energy > 22 && energy <= 29) {return 4}
    else if(energy > 29 && energy <= 36) {return 5}
    else if(energy > 36 && energy <= 43) {return 6}
    else if(energy > 43 && energy <= 50) {return 7}
    else if(energy > 50 && energy <= 57) {return 8}
    else if(energy > 57 && energy <= 65) {return 9}
    else if(energy > 65) {return 10}      
};

// 2.3.2 Calculation Nutri-score "sugars (Drinks modified)"

sugarsNutriDCalc = (sugars) => {
    if(sugars === 0) {return 0}
    else if(sugars > 0   && sugars<= 1.5) {return 1}
    else if(sugars > 1.5 && sugars<= 3) {return 2}
    else if(sugars > 3   && sugars<= 4.5) {return 3}
    else if(sugars > 4.5 && sugars<= 6) {return 4}
    else if(sugars > 6   && sugars<= 7.5) {return 5}
    else if(sugars > 7.5 && sugars<= 9) {return 6}
    else if(sugars > 9   && sugars<= 10.5) {return 7}
    else if(sugars > 10.5 && sugars<= 12) {return 8}
    else if(sugars > 12   && sugars<= 13.5) {return 9}
    else if(sugars > 13.5) {return 10}     
};

// 2.3.3 Calculation Nutri-score "healthyIng (Drinks modified)"

healthyIngNutriDCalc = (healthyIng) => {
    if(healthyIng <= 40) {return 0}
    else if(healthyIng > 40 && healthyIng <= 60) {return 2}
    else if(healthyIng > 60 && healthyIng <= 80) {return 4}      
    else if(healthyIng > 80) {return 10}       
};


// 3.      Calculation Nutri-score "Food (numerical total)"
//
// 3.1     Calculation Nutri-score "Partial Scores/Food (numerical total)"
//  
// 3.1.1     Calculation Nutri-score "Score nutriNF (numerical total)"



nutriNFCalc = (energyInputArg,satFatInputArg,sugarsInputArg,sodiumInputArg) => {

    const nutriNF = energyInputArg + 
                    satFatInputArg + 
                    sugarsInputArg + 
                    sodiumInputArg;

    return nutriNF;
} 

// 3.1.2    Calculation Nutri-score "Score nutriNVFO (numerical total)"


nutriNVFOCalc = (energyInputArg,ratioFatsInputArg,sugarsInputArg,sodiumInputArg) => {
    const nutriNVFO = energyInputArg + 
                    ratioFatsInputArg + 
                    sugarsInputArg + 
                    sodiumInputArg;  

    return nutriNVFO;
}


// 3.1.3    Calculation Nutri-score "Score nutriPF (numerical total)"

nutriPFCalc = (healthyIngInputArg,fibresInputArg,proteinsInputArg) => {
        
    const nutriPF = healthyIngInputArg + 
                    fibresInputArg + 
                    proteinsInputArg;


    return nutriPF;
} 


// 3.1.4    Calculation Nutri-score "Score nutriPF11 (numerical total)"

nutriPF11Calc = (healthyIngInputArg,fibresInputArg) => {
    const nutriPF11 = healthyIngInputArg + fibresInputArg;


    return nutriPF11;
} 


// 3.2 Calculation Nutri-score "nutriNumF + nutriScoreF (Food)"

nutriNumFCalc = (healthyIngNutriArg,nutriNFArg,nutriNVFOArg,nutriPFArg,nutriPF11Arg) => { 

    let nutriNumF = 0;  
    
    const category = this.props.product.productGroup;
    

    if(category !== null && category.toLowerCase() === "fette") {
        nutriNumF = nutriNVFOArg - nutriPFArg;
        
    }
    else if ((category !== null && category.toLowerCase() === "kaese") || (healthyIngNutriArg === 5) || nutriNFArg<11) {
        nutriNumF = nutriNFArg - nutriPFArg;
        
    }    
    else if(nutriNFArg>=11) {
        nutriNumF = nutriNFArg - nutriPF11Arg;

    }

    return nutriNumF;
}

nutriScoreFCalc = (nutriNum) => {   
    
    if (nutriNum <= -1) {this.setState({nutriscore: "A"})}
    else if (nutriNum >= 0 && nutriNum <= 2) {this.setState({nutriscore: "B"})}
    else if (nutriNum >= 3 && nutriNum <= 10) {this.setState({nutriscore: "C"})}
    else if (nutriNum >= 11 && nutriNum <= 18 ) {this.setState({nutriscore: "D"})}
    else if(nutriNum >= 19) {this.setState({nutriscore: "E"})}
}

                                                                    
// 4. Calculation Nutri-score "nutriNumD + nutriScoreD (Drinks)"

nutriNumDCalc = ( energyInputArg,satFatInputArg,sugarsInputArg,sodiumInputArg,healthyIngInputArg,fibresInputArg,proteinsInputArg) => {    
                           
                            const nutriPD = healthyIngInputArg + fibresInputArg + proteinsInputArg;
                            const nutriND = energyInputArg + satFatInputArg + sugarsInputArg + sodiumInputArg;
                            const nutriNumD = nutriND - nutriPD;
                           
                            return nutriNumD;
    
}                       

nutriScoreDCalc = (nutriNum) => {
    if (nutriNum <= 1) {this.setState({nutriscore: "B"})}
    else if (nutriNum >= 2 && nutriNum <= 5) {this.setState({nutriscore: "C"})}
    else if (nutriNum >= 6 && nutriNum <= 9 ) {this.setState({nutriscore: "D"})}
    else if(nutriNum >= 10) {this.setState({nutriscore: "E"})}
}

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
    let category=null;
        if (this.props.error===0) {
            category = this.props.product.productGroup
        } 
        if(this.props.error === 0 && this.props.product.productGroup && category.toLowerCase() === "wasser") {
            this.setState({nutriscore: "A"})}
            
        else if(this.props.error === 0 && this.props.product.productGroup && category.toLowerCase() === "getraenk") {

                this.nutriScoreDCalc(
                    this.nutriNumDCalc(

                        this.energyNutriDCalc(parseFloat(this.props.product.brennwertKCAL)),
                        this.satFatNutriCalc(parseFloat(this.props.product.gesaettigteFettsaeuren)),
                        this.sugarsNutriDCalc(parseFloat(this.props.product.zucker)),
                        this.sodiumNutriCalc(parseFloat(this.props.product.natrium)),
                        this.healthyIngNutriCalc(parseFloat(this.props.product.obstGemueseNuesseAnteil)),
                        this.fibresCalc(parseFloat(this.props.product.ballaststoffe)),
                        this.proteinsCalc(parseFloat(this.props.product.protein))
                    )
                )
                
            }
            
        else if (this.props.error === 0){
       
                this.nutriScoreFCalc(
                    this.nutriNumFCalc(
                        this.healthyIngNutriCalc(parseFloat(this.props.product.obstGemueseNuesseAnteil)),
                            this.nutriNFCalc(
                                this.energyNutriCalc(parseFloat(this.props.product.brennwertKCAL)),        
                                this.satFatNutriCalc(parseFloat(this.props.product.gesaettigteFettsaeuren)),
                                this.sugarsNutriCalc(parseFloat(this.props.product.zucker)),
                                this.sodiumNutriCalc(parseFloat(this.props.product.natrium))
                                    ),                                              
                            this.nutriNVFOCalc(
                                this.energyNutriCalc(parseFloat(this.props.product.brennwertKCAL)),
                                this.ratioFatsNutriCalc(parseFloat(this.props.product.fett),parseFloat(this.props.product.gesaettigteFettsaeuren)),
                                this.sugarsNutriCalc(parseFloat(this.props.product.zucker)),
                                this.sodiumNutriCalc(parseFloat(this.props.product.natrium))
                                    ),
                            this.nutriPFCalc(
                                this.healthyIngNutriCalc(parseFloat(this.props.product.obstGemueseNuesseAnteil)),
                                this.fibresCalc(parseFloat(this.props.product.ballaststoffe)),
                                this.proteinsCalc(parseFloat(this.props.product.protein))
                                    ),
                            this.nutriPF11Calc(
                                this.healthyIngNutriCalc(parseFloat(this.props.product.obstGemueseNuesseAnteil)),
                                this.fibresCalc(parseFloat(this.props.product.ballaststoffe))
                            )
                                )
                        )
          
        }
    
    if(this.props.error === 0 && this.props.product.productGroup && (this.props.product.productGroup.toLowerCase()==="getraenk" || this.props.product.productGroup.toLowerCase() === "wasser")) {
         this.replacePoints();
         this.tlScoring(this.fatTlCalcDrinks(parseFloat(this.props.product.fett)), "fatBG");        
         this.tlScoring(this.satFatTlCalcDrinks(parseFloat(this.props.product.gesaettigteFettsaeuren)),"satFatBG");
         this.tlScoring(this.sugarsTlCalcDrinks(parseFloat(this.props.product.zucker)),"sugarBG");
         this.tlScoring(this.saltTlCalcDrinks(parseFloat(this.props.product.natrium*2.54)),"saltBG");                 
     }
     else if (this.props.error===0 && this.props.product.productGroup){
         this.replacePoints();
         this.tlScoring(this.fatTlCalcFood(parseFloat(this.props.product.fett)), "fatBG");        
         this.tlScoring(this.satFatTlCalcFood(parseFloat(this.props.product.gesaettigteFettsaeuren)), "satFatBG");
         this.tlScoring(this.sugarsTlCalcFood(parseFloat(this.props.product.zucker)), "sugarBG");
         this.tlScoring(this.saltTlCalcFood(parseFloat(this.props.product.natrium*2.54)), "saltBG");
    
    };

}

render() {
    

        return (
        <div className="searchResults_div">
            {this.props.error===0? 
            <>
           
                <p className="titleResults">{this.props.product.hersteller} {this.props.product.productname}</p>

                <NutriScore nutriscore={this.state.nutriscore}/>
                {/* {this.state.nutriscore==="A" ? <div className="nutriscore"><img src="a_nutriscore.png"></img></div>:null}
                {this.state.nutriscore==="B" ? <div className="nutriscore"><img src="b_nutriscore.png"></img></div>:null}
                {this.state.nutriscore==="C" ? <div className="nutriscore"><img src="c_nutriscore.png"></img></div>:null}
                {this.state.nutriscore==="D" ? <div className="nutriscore"><img src="d_nutriscore.png"></img></div>:null}
                {this.state.nutriscore==="E" ? <div className="nutriscore"><img src="e_nutriscore.png"></img></div>:null} */}
            <h2 className="searchResults_h2">LEBENSMITTELAMPEL:</h2>
            <div className="trafficLight">
                <div className="singleTrafficLight">
                    <div className="singleTrafficLightText">Fett:<br/>{this.fat} g</div>
                    <TrafficLight blink={this.state.fatBG}/>
                    {/* <div className="light" style={{background: this.state.fatBG}}></div>*/}
                </div>
                <div className="singleTrafficLight">
                 <div className="singleTrafficLightText"><span className="titleSatFat">Gesättigte Fette:</span><br/>{this.satFat} g</div>
                    <TrafficLight blink={this.state.satFatBG}/>
                    {/* <div className="light" style={{background: this.state.satFatBG}}></div>*/}
                </div>
                <div className="singleTrafficLight">
                    <div className="singleTrafficLightText">Zucker:<br/>{this.sugar} g</div>
                    <TrafficLight blink={this.state.sugarBG}/>
                    {/* <div className="light" style={{background: this.state.sugarBG}}></div>*/}
                </div>
                <div className="singleTrafficLight">
                    <div className="singleTrafficLightText">Salz:<br/>{this.salt} g</div>
                    <TrafficLight blink={this.state.saltBG}/>
                   {/*  <div className="light" style={{background: this.state.saltBG}}></div>*/}
                </div>

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
