import React from 'react'
import './NutriScore.css'

 function NutriScore(props) {


    return (
        <div class="naturi_div">
                {props.nutriscore==="A" ? <div  className="button blinken button_a"><span className="groß_schrift">A</span></div> :<div  className="button button_a"><span>A</span></div>}
                {props.nutriscore==="B" ? <div  className="button blinken button_b"><span className="groß_schrift">B</span></div> :<div  className="button button_b"><span>B</span></div>}
                {props.nutriscore==="C" ? <div  className="button blinken button_c"><span className="groß_schrift">C</span></div> :<div  className="button button_c"><span>C</span></div>}
                {props.nutriscore==="D" ? <div  className="button blinken button_d"><span className="groß_schrift">D</span></div> :<div  className="button button_d"><span>D</span></div>}
                {props.nutriscore==="E" ? <div  className="button blinken button_e"><span className="groß_schrift">E</span></div> :<div  className="button button_e"><span>E</span></div>}
        </div>
    )
}

export default NutriScore;