import React from 'react'
import './ErrorMessage.css'

export default function ErrorMessage(props) {
    return (
        <div>
            Fehlernummer: {props.fehlernummer}
            Fehlermeldung: {props.fehlermeldung}
        </div>
    )
}
