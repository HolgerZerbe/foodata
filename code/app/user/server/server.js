const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use('/', express.static('public'));

require('dotenv').config();

const Product = require('./Product')

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.get('/product', async (req, res) => {
    if (req.query) {

        const foundproduct = await Product.find({ean:{$in:req.query.ean}});

        
        if (foundproduct.length === 0) {
            return res.send({error: 1001,
                message: "Produkt nicht gefunden"
            });
        }
        else if (foundproduct.length === 1) {
            let product = {
                            hersteller: foundproduct[0].hersteller,
                            productname: foundproduct[0].productname,
                            productGroup: foundproduct[0].productGroup,
                            brennwertKCAL: foundproduct[0].brennwertKCAL,
                            kohlenhydrate: foundproduct[0].kohlenhydrate,
                            fett: foundproduct[0].fett,
                            gesaettigte_Fettsaeuren: foundproduct[0].gesaettigte_Fettsaeuren,
                            natrium: foundproduct[0].natrium,
                            protein: foundproduct[0].protein,
                            ballaststoffe: foundproduct[0].ballaststoffe,
                            obstGemueseNuesseAnteil: foundproduct[0].obstGemueseNuesseAnteil
            }

        return res.send({error : 0, product: product})
        }
        else { return res.send({error: 1099, message: "Fehler in der Datenbank"})}
        

    } 
    
});

app.get('/search', async (req, res) => {
    if (req.query) {
    
        const foundproducts = await Product.find({$or:[{productname: {$regex: req.query.q, $options: 'i'}},
                                            {hersteller: {$regex: req.query.q, $options: 'i'}}
                                            ]});

        if (foundproducts.length>0) {

            let products =[];
            for (let elem of foundproducts) {
                products.push({"id": elem._id, "hersteller": elem.hersteller, "productname": elem.productname })
            }

            return res.send({error: 0, products: products})
        }
        else {
            return res.send({error: 1001,
                message: "Kein Produkt gefunden"
            });
    }
    }
});


app.get('/searchId', async (req, res) => {
    if (req.query) {
    
        const foundproduct = await Product.find({_id: req.query.id});

        if (foundproduct.length === 1) {

            let product = {
                            hersteller: foundproduct[0].hersteller,
                            productname: foundproduct[0].productname,
                            productGroup: foundproduct[0].productGroup,
                            brennwertKCAL: foundproduct[0].brennwertKCAL,
                            kohlenhydrate: foundproduct[0].kohlenhydrate,
                            fett: foundproduct[0].fett,
                            gesaettigte_Fettsaeuren: foundproduct[0].gesaettigte_Fettsaeuren,
                            natrium: foundproduct[0].natrium,
                            protein: foundproduct[0].protein,
                            ballaststoffe: foundproduct[0].ballaststoffe,
                            obstGemueseNuesseAnteil: foundproduct[0].obstGemueseNuesseAnteil
            }

            return res.send({error: 0, product: product})
        }
        else {
            return res.send({error: 1000,
                message: "Produkt nicht gefunden"
            });
    }
    }
});

console.log('Server gestartet')


app.listen(3001);