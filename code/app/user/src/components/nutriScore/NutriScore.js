import React from 'react'
import './NutriScore.css'

 function NutriScore(props) {


    return (
        <>
        <h2 className="nutri_h2">NUTRI-SCORE</h2>
        <div className="nutri_div">
                {props.nutriscore==="A" ? <div  className="button blinken button_a"><span className="gross_schrift">A</span></div> :<div  className="button button_a"><span className="nutri_span">A</span></div>}
                {props.nutriscore==="B" ? <div  className="button blinken button_b"><span className="gross_schrift">B</span></div> :<div  className="button button_b"><span className="nutri_span">B</span></div>}
                {props.nutriscore==="C" ? <div  className="button blinken button_c"><span className="gross_schrift">C</span></div> :<div  className="button button_c"><span className="nutri_span">C</span></div>}
                {props.nutriscore==="D" ? <div  className="button blinken button_d"><span className="gross_schrift">D</span></div> :<div  className="button button_d"><span className="nutri_span">D</span></div>}
                {props.nutriscore==="E" ? <div  className="button blinken button_e"><span className="gross_schrift">E</span></div> :<div  className="button button_e"><span className="nutri_span">E</span></div>}
        </div>
        </>
    )
}

export default NutriScore;