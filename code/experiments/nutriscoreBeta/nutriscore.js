// table of contents

// 0     Dom-Elemente  
//
// 0.1   Dom-Elemente Inputs 
// 0.1.1 Dom Input "negative nutriments"
// 0.1.2 Dom Input "positive nutriments "
// 0.1.1 Dom Input "categories"
//
// 0.2   Nutri-score Button
// 0.2.1 Dom Nutri-score Button
// 0.2.2 Dom Nutri-score Scoring
// 0.2.3 Dom Nutri-score Change-Color Funktion
//
// 0.3   Dom-Elemente Traffic-light
// 0.3.1 Dom Traffic-light Button
// 0.3.2 Dom Traffic-light Scoring
// 0.3.3 Dom Traffic-light Change-Color Function
//
// 1.    (84)Calculations Traffic light rating system (Tlrs/Tl)
//
// 1.1   (86)Calculations Tl Food
// 1.1.1 (88)Calculation Tl Food "fat"
// 1.1.2 (100)Calculation Tl Food "satFat"
// 1.1.3 (112)Calculation Tl Food "sugars"
// 1.1.4 (124)Calculation Tl Food "salt"
//
// 1.2   (136)Calculations Tl Drinks
// 1.2.1 (138)Calculation Tl Drinks "fat"
// 1.2.2 (150)Calculation Tl Drinks "satFat"
// 1.2.3 (162)Calculation Tl Drinks "sugars"
// 1.2.4 (174)Calculation Tl Drinks "salt"
//
// 1.3   Button-Funktion Ampel!
//
//
// 2.    (200)Calculations Nutri-score "general"
//
// 2.1   (202)Calculations Nutri-score "negative nutriments"//
// 2.1.1 (204)Calculation Nutri-score "Energy in kcal/g"
// 2.1.2 (224)Calculation Nutri-score "saturated fats"
// 2.1.3 (242)Calculation Nutri-score "sugars"
// 2.1.4 (261)Calculation Nutri-score "sodium"
// 2.1.5 (280)Calculation Nutri-score "ratio satFats/fats"
//
// 2.2   (303)Calculations Nutri-score "positive nutriments"
// 
// 2.2.1 (305)Calculation Nutri-score "fruits, vegetables, nuts (healthyIng/ healthy Ingredients)"
// 2.2.2 (317)Calculation Nutri-score "fibres"
// 2.2.3 (333)Calculation Nutri-score "proteins"
//
// 2.3   (346)Calculations Nutri-score "drinks modified"
//
// 2.3.1 (348)Calculation Nutri-score "Energy in kcal/g (Drinks modified)"
// 2.3.2 (367)Calculation Nutri-score "sugars (Drinks modified)"
// 2.3.3 (386)Calculation Nutri-score "healthyIng (Drinks modified)"
//
//
// 3.      Calculation Nutri-score "Food (numerical total)"
//
// 3.1     Calculation Nutri-score "Partial Scores/Food (numerical total)"
// 3.1.1   Calculation Nutri-score "Score nutriNF (numerical total)"
// 3.1.2   Calculation Nutri-score "Score nutriNVFO (numerical total)"
// 3.1.3   Calculation Nutri-score "Score nutriPF (numerical total)"
// 3.1.4   Calculation Nutri-score "Score nutriPF11 (numerical total)"
//
//
// 3.2    Calculation Nutri-score "nutriNumF + nutriScoreF (Food)"
//
// 3.2.1 
//
// 4. ()Calculation Nutri-score "Drinks (numerical total)"
//
// 4.5   (395)Calculation Nutri-score "Output"
// 4.5.1 (397)Calculation Nutri-score "Output Food"
// 4.5.2 (410)Calculation Nutri-score "Output Drinks"
//
//
// 0.1 Dom-Elemente Inputs 
//
// 0.1.1 Dom Input "negative nutriments"

const energyInput = document.getElementById('energyInput');
const fatInput = document.getElementById('fatInput');
const satFatInput = document.getElementById('satFatInput');
const sugarsInput = document.getElementById('sugarsInput');
const saltInput = document.getElementById('saltInput');

const sodiumInputValue = saltInput.value*0.388;


// 0.1.2 Dom Input "positive nutriments "

const healthyIngInput = document.getElementById('healthyIngInput');
const fibresInput = document.getElementById('fibresInput');
const proteinsInput = document.getElementById('proteinsInput');



// 0.2   Dom-Elemente Nutri-score
//
// 0.2.1 Dom Nutri-score Button

const btnNS = document.getElementById('btnNS');

// 0.2.2 Dom Nutri-score Scoring

const nutriScore = document.getElementById('nutriScore');
// const b = document.getElementById('b');
// const c = document.getElementById('c');
// const d = document.getElementById('d');
// const e = document.getElementById('e');

//0.2.3 Dom-Elemente Nutri-score Change-Color Function

const nutriScoring = (i) => {
    colorStyle = ['#0088000','#01ff07','#ffbf00','#f97306','#e50000'];   
    nutriLetter = ['A','B','D','E','F'];     

    nutriScore.style.color = colorStyle[i];    
    nutriScore.style.border = colorStyle[i];
    nutriScore.innerText = nutriLetter[i];
    return;
}

// 0.3   Dom-Elemente Traffic-light
//
// 0.3.1 Dom Traffic-light Button

const btnTl = document.getElementById('btnTl');

// 0.3.2 Dom Traffic-light Scoring

const tlScoringFat = document.getElementById('tlScoringFat');
const tlScoringSatFat = document.getElementById('tlScoringSatFat');
const tlScoringSugars = document.getElementById('tlScoringSugars');
const tlScoringSalt = document.getElementById('tlScoringSalt');

// 0.3.3 Dom Traffic-light Change-Color Function

const tlScoring = (i,elementToChange) => {   
     colorStyle=['#32CD32','#ffbf00','#ff0000'];  

     elementToChange.style.background = colorStyle[i];
     return
}


// 1. Calculations Traffic light rating system (Tlrs/Tl)
//
// 1.1 Calculations Tl Food

// 1.1.1 Calculation Tl Food "fat"

const fatTlCalcFood = (fat) => {
        // if(fat < 3) {return 'fatTlCalcFood: Green (low)'}        
        if(fat < 3) {return 0}        
    else if(fat >= 3 && fat <= 17.5) {return 1}     
    else if(fat > 17.5) {return 2}      
    else return 'Keine Zahl eingegeben!';    
};

// 1.1.2 Calculation Tl Food "satFat"

const satFatTlCalcFood = (satFat) => {

    if(satFat <= 1.5) {return 0}           
    else if(satFat >= 1.5 && satFat <= 5) {return 1}       
    else if(satFat > 5) {return 2}    
    else return 'Keine Zahl eingegeben!';    
};
// 1.1.3 Calculation Tl Food "sugars"

const sugarsTlCalcFood = (sugars) => {
    if(sugars < 5) {return 0}
    else if(sugars >= 5 && sugars <= 22.5) {return 1}   
    else if(sugars > 22.5) {return 2}
    else return 'Keine Zahl eingegeben!';    
};

// 1.1.4 Calculation Tl Food "salt"

const saltTlCalcFood = (salt) => {    
    if(salt < 0.3) {return 0
    }
    else if(salt >= 0.3 && salt <= 1.5) {return 1}    
    else if(salt > 1.5) {return 2}
    else {return 'Keine Zahl eingegeben!'};    
};

// 1.2 Calculations Tl Drinks

// 1.2.1 Calculation Tl Drinks "fat"

const fatTlCalcDrinks = (fat) => {
    if(fat < 1.5) {return 0}
    else if(fat >= 1.5 && fat <= 8.75) {return 1}    
    else if(fat > 8.75) {return 2}
    else return 'Keine Zahl eingegeben!';    
};

// 1.2.2 Calculation Tl Drinks "satFat"

const satFatTlCalcDrinks = (satFat) => {
    if(satFat < 0.75) {return 0}
    else if(satFat >= 0.75 && satFat <= 2.5) {return 1}    
    else if(satFat > 2.5) {return 2}
    else return 'Keine Zahl eingegeben!';    
};

// 1.2.3 Calculation Tl Drinks "sugars"

const sugarsTlCalcDrinks = (sugars) => {
    if(sugars < 2.5) {return 0}
    else if(sugars >= 2.5 && sugars <= 11.25) {return 1}    
    else if(sugars > 11.25) {return 2}
    else return 'Keine Zahl eingegeben!';    
};

// 1.2.4 Calculation Tl Drinks "salt"

const saltTlCalcDrinks = (salt) => {

    if(salt < 0.3) {return 0}
    else if(salt >= 0.3 && salt <= 1.5) {return 1}    
    else if(salt > 1.5) {return 2}
    else return 'Keine Zahl eingegeben!';    
};


// 1.3 Button-Funktion Ampel!

btnTl.onclick = () => {   
    const drinksCat = document.getElementById('drinks').checked;     
    if(drinksCat) {
        console.log("it is drinks");
        tlScoring(fatTlCalcDrinks(fatInput.value), tlScoringFat);        
        tlScoring(satFatTlCalcDrinks(satFatInput.value),tlScoringSatFat);
        tlScoring(sugarsTlCalcDrinks(sugarsInput.value),tlScoringSugars);
        tlScoring(saltTlCalcDrinks(saltInput.value),tlScoringSalt);         
        return;           
    }
    else {
        console.log("it is food");
        tlScoring(fatTlCalcFood(fatInput.value),tlScoringFat);        
        tlScoring(satFatTlCalcFood(satFatInput.value),tlScoringSatFat);
        tlScoring(sugarsTlCalcFood(sugarsInput.value),tlScoringSugars);
        tlScoring(saltTlCalcFood(saltInput.value),tlScoringSalt);
        return;
    }
};

// 2.     Calculations Nutri-score

// 2.1   Calculations Nutri-score "negative nutriments"
//
// 2.1.1 Calculation Nutri-score "Energy in kcal/g"

const energyNutriCalc = (energy) => {
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
    else return 'Keine Zahl eingegeben!'    
};

// 2.1.2 Calculation Nutri-score "saturated fats"

const satFatNutriCalc = (satfat) => {
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
    else return 'Keine Zahl eingegeben!'    
};

// 2.1.3 Calculation Nutri-score "sugars"

const sugarsNutriCalc = (sugars) => {
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
    else return 'Keine Zahl eingegeben!'    
};

// 2.1.4 Calculation Nutri-score "sodium"

const sodiumNutriCalc = (sodium) => {
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
    else return 'Keine Zahl eingegeben!'    
};

// 2.1.5 Calculation Nutri-score "ratio satFats/fats"

const ratioFatsNutriCalc = (fat,satfat) => {
    if((satfat/fat) < 0.10) {return 0}
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
    else return 'Keine Zahl eingegeben!'    
};


// 2.2   Calculations Nutri-score "positive nutriments"

// 2.2.1 Calculation Nutri-score "fruits, vegetables, nuts (healthyIng/ healthy Ingredients)"

const healthyIngNutriCalc = (healthyIng) => {
    if(healthyIng <= 40) {return 0}
    else if(healthyIng > 40 && healthyIng <= 60) {return 1}
    else if(healthyIng > 60 && healthyIng <= 80) {return 2}      
    else if(healthyIng > 80) {return 5}
    else return 'Keine Zahl eingegeben!'    
};



// 2.2.2 Calculation Nutri-score "fibres"

const fibresCalc = (fibres) => {
    if(fibres <= 0.9) {return 0}
    else if(fibres > 0.9 && fibres <= 1.9) {return 1}
    else if(fibres > 1.9 && fibres <= 2.8) {return 2}
    else if(fibres > 2.8 && fibres <= 3.7) {return 3}
    else if(fibres > 3.7 && fibres <= 4.7) {return 4}    
    else if(fibres > 4.7) {return 5}
    else return 'Keine Zahl eingegeben!'    
};;



// 2.2.3 Calculation Nutri-score "proteins"

const proteinsCalc =(proteins) => {
    if(proteins <= 1.6) {return 0}
    else if(proteins > 1.6 && proteins <= 1.8) {return 1}
    else if(proteins > 3.2 && proteins <= 2.7) {return 2}
    else if(proteins > 4.8 && proteins <= 3.6) {return 3}
    else if(proteins > 6.4 && proteins <= 8.0) {return 4}    
    else if(proteins > 8.0) {return 5}
    else return 'Keine Zahl eingegeben!'    
};




// 2.3    Calculations Nutri-score "drinks modified"
//
// 2.3.1 Calculation Nutri-score "Energy in kcal/g (Drinks modified)"

const energyNutriDCalc = (energy) => {
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
    else return 'Keine Zahl eingegeben!'    
};



// 2.3.2 Calculation Nutri-score "sugars (Drinks modified)"

const sugarsNutriDCalc = (sugars) => {
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
    else return 'Keine Zahl eingegeben!'    
};



// 2.3.3 Calculation Nutri-score "healthyIng (Drinks modified)"

const healthyIngNutriDCalc = (healthyIng) => {
    if(healthyIng <= 40) {return 0}
    else if(healthyIng > 40 && healthyIng <= 60) {return 2}
    else if(healthyIng > 60 && healthyIng <= 80) {return 4}      
    else if(healthyIng > 80) {return 10}
    else return 'Keine Zahl eingegeben!'    
};

// 3.      Calculation Nutri-score "Food (numerical total)"
//
// 3.1     Calculation Nutri-score "Partial Scores/Food (numerical total)"
//  
// 3.1.1     Calculation Nutri-score "Score nutriNF (numerical total)"

// const nutriNF = energyNutriCalc(energyInput) + satFatNutriCalc(satFatInput) +sugarsNutriCalc(sugarsInput) + sodiumNutriCalc(sodiumInput);

const nutriNFCalc = (energyInputArg,satFatInputArg,sugarsInputArg,sodiumInputArg) => {
    const nutriNF = energyNutriCalc(energyInputArg) + 
                    satFatNutriCalc(satFatInputArg) + 
                    sugarsNutriCalc(sugarsInputArg) + 
                    sodiumNutriCalc(sodiumInputArg);
    return nutriNF;
} 

console.log(nutriNFCalc(energyInput.value,
                        satFatInput.value,
                        sugarsInput.value,
                        sodiumInputValue));

// 3.1.2    Calculation Nutri-score "Score nutriNVFO (numerical total)"

// const nutriNVFO = energyNutriCalc(healthyIngInput + ratioFatsNutriCalc(fatInput,satFatInput) + sugarsNutriCalc(sugarsInput) + sodiumNutriCalc(sodiumInput))


const nutriNVFOCalc = (energyInputArg,fatInputArg,satFatInputArg,sugarsInputArg,sodiumInputArg) => {
    const nutriNVFO = energyNutriCalc(energyInputArg) + 
                    ratioFatsNutriCalc(fatInputArg,satFatInputArg) + 
                    sugarsNutriCalc(sugarsInputArg) + 
                    sodiumNutriCalc(sodiumInputArg)
    return nutriNVFO;
}

console.log(nutriNVFOCalc(energyNutriCalc(energyInput.value),
                        ratioFatsNutriCalc(fatInput.value,satFatInput.value),
                        sugarsNutriCalc(sugarsInput.value),
                        sodiumNutriCalc(sodiumInputValue)));

// 3.1.3    Calculation Nutri-score "Score nutriPF (numerical total)"

// const nutriPF = healthyIngNutriCalc(healthyIngInput) + fibresFunc(fibresInput) + proteinsFunc(proteinsInput);

const nutriPFCalc = (healthyIngInputArg,fibresInputArg,proteinsInputArg) => {
    const nutriPF = healthyIngNutriCalc(healthyIngInputArg) + 
                    fibresCalc(fibresInputArg) + 
                    proteinsCalc(proteinsInputArg);
    return nutriPF;
} 

console.log(nutriPFCalc(healthyIngNutriCalc(healthyIngInput.value),
                        fibresCalc(fibresInput.value),
                        proteinsCalc(proteinsInput.value)));

// 3.1.4    Calculation Nutri-score "Score nutriPF11 (numerical total)"

// const nutriPF11 = healthyIngNutriCalc(healthyIngInput) + fibresFunc(fibresInput);

const nutriPF11Calc = (healthyIngInputArg,fibresInputArg) => {
    const nutriPF11 = healthyIngNutriCalc(healthyIngInputArg) + fibresCalc(fibresInputArg);
    return nutriPF11;
} 

console.log(nutriPF11Calc(healthyIngNutriCalc(healthyIngInput.value),
                            fibresCalc(fibresInput.value)));
                            

console.log('nutriNF: ' + nutriNFCalc() + ' |nutriNVFO: ' + nutriNVFOCalc() + '|nutriPF:' + nutriPFCalc() + '|nutriPF11:' + nutriPF11Calc());



// 3.2 Calculation Nutri-score "nutriNumF + nutriScoreF (Food)"

const nutriNumFCalc = (healthyIngNutriArg,nutriNFArg,nutriNVFOArg,nutriPFArg,nutriPF11Arg) => { 
    const cheeseCat = document.getElementById('cheese').checked;
    const vegOFCat = document.getElementById('vegOF').checked; 
    let nutriNumF = 0;    
    if(vegOFCat) {
        nutriNumF = nutriNVFOArg - nutriPFArg;
        console.log('nutriScoreNumVegOF: ' + nutriNumF);
        
    }
    else if (( cheeseCat) || (healthyIngNutriArg === 5) || nutriNFArg<11) {
        nutriNumF = nutriNFArg - nutriPFArg;
        console.log('nutriScoreNumFStandard :' + nutriNumF)
        
    }    
    else if(nutriNFArg>=11) {
        nutriNumF = nutriNFArg - nutriPF11Arg;
        console.log('nutriScoreNumFOver11: ' + nutriNumF + ' |nutriNFArg: ' + nutriNFArg + ' |nutriPF11Arg: ' + nutriPF11Arg)
        
    }
    return nutriNumF;
}

/* const nutriNumFCalcEx = () => {
    return nutriNumFCalc(vegOFCat,cheeseCat,healthyIngNutriCalc(),nutriNFCalc(),nutriNVFOCalc(),nutriPFCalc(),nutriPF11Calc());
}  */

/* console.log('nutriNumF: ' + nutriNumFCalcEx()); */


const nutriScoreFCalc = (nutriNum) => {   
    
    if (nutriNum <= -1) {return 0}
    else if (nutriNum >= 0 && nutriNum <= 2) {return 1}
    else if (nutriNum >= 3 && nutriNum <= 10) {return 2}
    else if (nutriNum >= 11 && nutriNum <= 18 ) {return 3}
    else if(nutriNum >= 19) {return 4}
    else {return 'Fehler'}
}

// console.log('Nutri-score Foods: ' + 
//             nutriScoreFCalc(nutriNumFCalc(healthyIngNutriCalc(healthyIngInput.value),
//                                             nutriNFCalc(nutriNF(energyInput.value,
//                                                                 satFatInput.value,
//                                                                 sugarsInput.value,
//                                                                 sodiumInputValue)),
//                                             nutriNVFOCalc(energyNutriCalc(energyInput.value),
//                                                         ratioFatsNutriCalc(fatInput.value,satFatInput.value),
//                                                         sugarsNutriCalc(sugarsInput.value),
//                                                         sodiumNutriCalc(sodiumInputValue)),
//                                             nutriPFCalc(healthyIngNutriCalc(healthyIngInput.value),
//                                                         fibresCalc(fibresInput.value),
//                                                         proteinsCalc(proteinsInput.value)),
//                                             nutriPF11Calc(healthyIngNutriCalc(healthyIngInput.value),
//                                                         fibresCalc(fibresInput.value)))));

                                                                    
// 4. Calculation Nutri-score "nutriNumD + nutriScoreD (Drinks)"


const nutriNumDCalc = (healthyIngInputArg,
                        fibresInputArg,
                        proteinsInputArg,
                        energyInputArg,
                        satFatInputArg,
                        sugarsInputArg,
                        sodiumInputArg) => {    

    const nutriPD = healthyIngNutriDCalc(healthyIngInputArg) + fibresCalc(fibresInputArg) + proteinsCalc(proteinsInputArg);
    console.log('nutriPD:' + nutriPD);
    const nutriND = energyNutriDCalc(energyInputArg) + satFatNutriCalc(satFatInputArg) +sugarsNutriDCalc(sugarsInputArg) + sodiumNutriCalc(sodiumInputArg);
    console.log('nutriND: '+ nutriPD);
    const nutriNumD = nutriND - nutriPD;
    console.log('nutriNumD' + nutriNumD)
    return nutriNumD;
    
}

console.log(nutriNumDCalc(healthyIngNutriDCalc(healthyIngInput.value),
                        fibresCalc(fibresInput.value),
                        proteinsCalc(proteinsInput.value),
                        energyNutriDCalc(energyInput.value),
                        satFatNutriCalc(satFatInput.value),
                        sugarsNutriDCalc(sugarsInput.value),
                        sodiumNutriCalc(sodiumInputValue)))
                            

const nutriScoreDCalc = (nutriNum) => {
    if (nutriNum === 'Water') {return 0}
    else if (nutriNum <= 1) {return 1}
    else if (nutriNum >= 2 && nutriNum <= 5) {return 2}
    else if (nutriNum >= 6 && nutriNum <= 9 ) {return 3}
    else if(nutriNum >= 10) {return 4}
    else {return 'Fehler'}
}

console.log('Nutri-score Drinks: ' + nutriScoreDCalc(nutriNumDCalc()));



// Button-Funktion Nutriscore!

btnNS.onclick = () => {
    const drinksCat = document.getElementById('drinks').checked;
    if(drinksCat) {
        console.log('it is drinks');
        nutriScoring(nutriScoreDCalc(nutriNumDCalc(healthyIngNutriDCalc(healthyIngInput.value),
                                                    fibresCalc(fibresInput.value),
                                                    proteinsCalc(proteinsInput.value),
                                                    energyNutriDCalc(energyInput.value),
                                                    satFatNutriCalc(satFatInput.value),
                                                    sugarsNutriDCalc(sugarsInput.value),
                                                    sodiumNutriCalc(sodiumInputValue))),)
    }
    else {
        console.log('it is food');
    }
}
