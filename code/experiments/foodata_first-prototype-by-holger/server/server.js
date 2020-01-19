const express = require('express');
const app = express();

app.use(express.json());


// EAN als Array, da ein Produkt mehrere EAN aufgrund von 
// Packungsgrößen oder speziellen Herstellervorgaben haben kann
// trafficlightIndex:
// 0 = grün
// 1 = gelb
// 2 = rot
let products = [{ id: 1, EAN: ["4060800156525", "4711"], product:"Pepsi Max", trafficColorIndex: 0, massValue: "100 ml", calorificValue: "1 KJ / 0,3 Kcal", carbohydrates: "0,1", fat: "0,1", protein: "0,1", salt: "0,02"}]


app.get('/product', (req, res) => {
    return res.send({message: "Willkommen bei Foodata"});
});

app.post('/product', (req, res) => {

    products.push(req.body)
    return res.send({message: "Produkt erfolgreich zugefügt"});
});

app.get('/product/:id', (req, res) => {

    const found = products.filter(element => element.EAN.includes(req.params.id)) 
    console.log(found)
    if(found.length===1) {
        return res.send(found);
    } else {
        return res.send([{ id: 0, EAN: [], product:"kein Produkt gefunden", trafficColorIndex: 3, massValue: "-", calorificValue: "- KJ / - Kcal", carbohydrates: "-", fat: "-", protein: "-", salt: "-"}])
    }
});


console.log ('Server gestartet')


app.listen(3001);