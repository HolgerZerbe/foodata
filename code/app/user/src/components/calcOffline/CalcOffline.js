import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendAwayToCalculate} from '../../actions';
import ReactSelect from "react-select";
import './CalcOffline.css';

class CalcOffline extends Component {

    state = {
        produktgruppe: {value: "Sonstiges"},
        energie: {value: "", placeholder: "Brennwert in KCAL"},
        zucker: {value: "", placeholder: "Zucker in g"},
        fett: {value: "", placeholder: "Fett in g"},
        gesaettigteFettsaeuren: {value: "", placeholder: "gesättigte Fettsäuren in g"},
        salz: {value: "", placeholder: "Salz in g"},
        protein: {value: "", placeholder: "Eiweiß in g"},
        ballaststoffe: {value: "", placeholder : "Ballaststoffe in g"},
        obstGemueseNuesse: {value: "", placeholder : "Anteil Obst/Gemüse/Nüsse in %"}
    }

    handleChange(e) {
        this.setState({[e.target.name]: {value: e.target.value}});
    }

    selecthandleChange = selectedOption => {
        console.log(selectedOption)

        this.setState({produktgruppe: { value :selectedOption.value }});
        console.log(`Option selected:`, selectedOption);
        };
    send = () => {
        for (let key in this.state) {
            if (key!=="produktgruppe" && key !=="obstGemueseNuesse") {

                if (this.state[key].value.replace(',', '') != parseFloat(this.state[key].value.replace(',', ''))) {
                    this.setState({[key]: {value:"",
                                            placeholder:"Bitte korrekte Zahl eingeben"}})
                    return
                }
            }
        }

                if ((this.state.obstGemueseNuesse.value.replace(',', '') === parseFloat(this.state.obstGemueseNuesse.value.replace(',', '')) || (parseFloat(this.state.obstGemueseNuesse.value.replace(',', '.')) < 0) || (parseFloat(this.state.obstGemueseNuesse.value.replace(',', '.')) >= 100))) {
                    this.setState({obstGemueseNuesse: {value:"",
                                    placeholder:"Bitte korrekte Prozentzahl eingeben"}})
                    return
                }


        const product = {
                    hersteller: "Nicht angegeben",
                    productname: "Nicht angegeben",
                    productGroup: this.state.produktgruppe.value.toLowerCase(),
                    brennwertKCAL: this.state.energie.value.replace(',', '.'),
                    zucker: this.state.zucker.value.replace(',', '.'),
                    fett: this.state.fett.value.replace(',', '.'),
                    gesaettigteFettsaeuren: this.state.gesaettigteFettsaeuren.value.replace(',', '.'),
                    natrium : (Math.round(parseFloat(this.state.salz.value.replace(',', '.'))/2.54*10))/10,
                    protein:this.state.protein.value.replace(',', '.'),
                    ballaststoffe: this.state.ballaststoffe.value.replace(',', '.'),
                    obstGemueseNuesseAnteil: this.state.obstGemueseNuesse.value.replace(',', '.')
        }
console.log(product)

        this.props.sendAwayToCalculate(product)

    }

     options=[
        { label: "wasser", value: "wasser" },
        { label: "andere Getränke", value: "getraenk" },
        { label: "Käse", value: "kaese" },
        { label: "Fette / Öle", value:"fette" },
        { label: "Sonstiges", value: "Alle anderen Lebensmittel" }
    ]

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="calcDiv">
                <form>
                    <ReactSelect
                        onChange={this.selecthandleChange}
                        multi
                        placeholder="Bitte wähle eine Produktgruppe:"
                        value={selectedOption}
                        options={this.options}  />

                    <p>Bitte gib die folgende Werte pro 100 g bzw. 100 ml ein:</p>

                    <div className="input_div">

                        <input type="text" value = {this.state.energie.value} name="energie" placeholder= {this.state.energie.placeholder} onChange={(e) => this.handleChange(e)} />

                        <input type="text" value = {this.state.zucker.value} name="zucker" placeholder={this.state.zucker.placeholder} onChange={(e) => this.handleChange(e)} />

                        <input type="text" value = {this.state.fett.value} name="fett" placeholder={this.state.fett.placeholder} onChange={(e) => this.handleChange(e)} />

                        <input type="text" value = {this.state.gesaettigteFettsaeuren.value} name="gesaettigteFettsaeuren" placeholder={this.state.gesaettigteFettsaeuren.placeholder} onChange={(e) => this.handleChange(e)} />

                        <input type="text" value = {this.state.salz.value} name="salz" placeholder={this.state.salz.placeholder} onChange={(e) => this.handleChange(e)} />

                        <input type="text" value = {this.state.protein.value} name="protein" placeholder={this.state.protein.placeholder} onChange={(e) => this.handleChange(e)} />

                        <input type="text" value = {this.state.ballaststoffe.value} name="ballaststoffe" placeholder={this.state.ballaststoffe.placeholder} onChange={(e) => this.handleChange(e)} />

                        <input type="text" value = {this.state.obstGemueseNuesse.value} name="obstGemueseNuesse" placeholder={this.state.obstGemueseNuesse.placeholder} onChange={(e) => this.handleChange(e)} />

                        <p>Wenn Sie den Anteil von Obst, Gemüse und Nüssen  oder an Ballaststoffen nicht kennen dann geben Sie bitte 0 ein<br />Die Berechnung des Nutriscores kann dann zwar erfolgen, aber er kann dadurch schlechter ausfallen</p>

                    </div>

                </form>
                            <div onClick={()=>this.send()} className="animated-button">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Berechnen
                            </div>


                </div>
        )
    }
}

export default connect(null,{sendAwayToCalculate})(CalcOffline);