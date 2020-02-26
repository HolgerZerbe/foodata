import './InfoFaq.css'
import React from 'react'

function InfoFaq() {
    return (
        <>
        <div className="info-faq">
            <h2>foodata – Info und FAQ</h2>
            <p>Mit Foodata kannst du auf schnelle und einfache Weise entscheiden, welche Lebensmittel Teil deines gesunden Essens sein sollen. <br/>
            Diese App kannst du auf deine Smartphone laden, aber du kannst sie auch in der Desktop-Version benutzen.<br/>
            Du hast 3 Möglichkeiten die Werte des gewählten Produktes zu bestimmen:</p>
            <ol>
            <li>&nbsp;Du kannst Lebensmittel und Getränke scannen.</li>
            <li>&nbsp;Du kannst Produkte über ihren Produktnamen zu suchen und finden.</li>
            <li>&nbsp;Du kannst den Nutri-score und die Lebensmittelampel auch selbst berechnen (notwendig, falls du offline bist, oder das Produkt nicht in unserer Datenbank vorhanden ist).</li>
            </ol>
            <h2>FAQ</h2>
            <p><strong> 1 &#041; &nbsp; Was sind Nutri-score und Lebensmittelampel eigentlich?</strong><br/>
            Die Ampel zeigt dir den Gehalt an gesundheitsrelevanten Nährstoffen wie Fetten, Zucker und Salz. Weitere Informationen findest du <a className="link-extern" href="https://de.wikipedia.org/wiki/Lebensmittelampel" target="_blank">hier</a><br/>
            Der Nutri-score zeigt dir auf einer Skala von A bis E wie gesund das ausgewählte Produkt ist.  Weitere Informationen findest du <a className="link-extern" href="https://www.vzhh.de/sites/default/files/medien/134/dokumente/2019-10_Verbraucherzentrale-Hamburg_Fragen-und-Antworten-zum-Nutri-Score.pdf" target="_blank">hier</a><br/>
            <strong>2 &#041; &nbsp; Manchmal zeigen Nutri-score und Ampel widersprüchliche Angaben zum Produkt, welcher Bewertung soll ich mehr vertrauen?</strong><br/>
            Beide Labels geben dir wichtige Informationen!  Die Ampel zeigt den Score der potentiell negativen Nährstoffe, der Nutri-score zeigt eine Bewertung, die sowohl positive wie negative Nährstoffe berücksichtigt. <br/>
            Wenn ein Produkt z.B keinerlei positive Nährstoffe enthält, kann es auch bei einem moderaten Anteil von negativen Nährstoffen ein negativer Nutriscore erhalten.<br/>
            <strong>3 &#041; &nbsp; Ich finde auf dem Produkt keine Angaben zu durchschnittlichen Nährwerten wie Fette und Zucker, kann die App trotzdem den Nutri-score und die Lebensmittelampel ausrechen?</strong><br/>
            Nein, ohne Nährwertkennzeichnung auf dem Produkt funktionieren unsere Ampel und der Nutri-score leider nicht!<br/>
            <strong>4 &#041; &nbsp; Gibt es denn Produkte, die überhaupt keine  Nährwertkennzeichnung haben?</strong><br/>
            Ja, hierzu zählen z.B alle alkoholischen Getränke mit mehr als 1,2 Volumenprozent Alkohol, aber auch unverarbeitete Produkte, die aus nur einer Zutat bestehen. <br/>
            Weitere Informationen findest <a className="link-extern" href="https://www.lebensmittelklarheit.de/informationen/naehrwertkennzeichnung-wichtige-information-fehlt-auf-vielen-lebensmitteln" target="_blank">auf dieser Seite</a> auf dieser Seite unter dem Punkt “Ausnahmen von der Nährwertkennzeichnung”.</p>
        </div>
        </>
    )
}

export default InfoFaq