import React from 'react'
import './ErrorMessage.css'


export default function ErrorMessage(props) {
    return (
        <>
        {props.fehlerNummer===1001 ? <div className="error_div">
            <div id="oops">
                <p id="o">O</p>
                <p id="o2">o</p>
                <p id="p">p</p>
                <p id="s">s</p>
                <p id="ausrufezeichen">!</p>
            </div>
            <div className="img_not_found">
                <img className="img_ele" src='3d_man_kein_produkt_gefunden.png' alt=''/>
            </div>
        </div> : null}

        {props.fehlerNummer===503 ? <div className="error_div">
            <div id="oops">
                <p id="o">O</p>
                <p id="o2">o</p>
                <p id="p">p</p>
                <p id="s">s</p>
                <p id="ausrufezeichen">!</p>
            </div>
            <div className="img_not_found">
                <img className="img_ele" src='3d_man_server_nicht_erreichbar.png' alt=''/>
            </div>
        </div> : null}





        </>
    )
}
