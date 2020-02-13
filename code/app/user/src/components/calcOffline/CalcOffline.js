import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setProductFoundToFalse} from '../../actions';
import './CalcOffline.css';


class CalcOffline extends Component {

    send = () => {
        console.log("Button pressed")
    }

    render() {
        return (
            <div className="calcDiv">

                <form>
                <p>Bitte wähle eine Produktgruppe:</p>
                <select name="produktgruppe">Bitte auswählen
                    <option value="wasser">Wasser</option>
                    <option value="getraenk">andere Getränke</option>
                    <option value="kaese">Käse</option>
                    <option value="fette">Fette / Öle</option>
                    <option value="Sonstiges">alle anderen Lebensmittel</option>
                </select>
                <p>Bitte gib die folgende Werte pro 100 g bzw. 100 ml ein:</p>
                <input type="text" name="energie" placeholder="Brennwert in KCAL" />
                <input type="text" name="kohlenhydrate" placeholder="Kohlenhydrate in g" />
                <input type="text" name="fett" placeholder="Fett in g" />
                <input type="text" name="gesaettigteFettsaeuren" placeholder="Gesättigte Fettsäuren in g" />
                <input type="text" name="salz" placeholder="Salz in g" />
                <input type="text" name="protein" placeholder="Eiweiß in g" />
                <input type="text" name="Ballaststoffe" placeholder="Ballaststoffe in g" />
                <input type="text" name="obstGemueseNuesse" placeholder="Anteil Obst/Gemüse/Nüsse in %" />
                <p><button onClick = {this.send.bind(this)}>Berechnen</button></p>
                </form>

            </div>
        )
    }
}

export default connect(null,{setProductFoundToFalse})(CalcOffline);