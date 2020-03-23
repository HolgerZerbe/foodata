const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use('/', express.static('public'));

const cors = require('cors');
app.use(cors());

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
                            zucker: foundproduct[0].zucker,
                            fett: foundproduct[0].fett,
                            gesaettigteFettsaeuren: foundproduct[0].gesaettigte_Fettsaeuren,
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
    
        const splittedReqQueryQ = req.query.q.split(' ');
        let allReqQueryQ = [];
        for (let i=0; i<splittedReqQueryQ.length; i++) {
            if (splittedReqQueryQ[i] !== "") {
                allReqQueryQ.push(splittedReqQueryQ[i])
            }
        }

        let foundProducts=[];

        if (allReqQueryQ.length===1) {
            foundProducts = await Product.find({$or:[{productname: {$regex: allReqQueryQ[0], $options: 'i'}},
                                                {hersteller: {$regex: allReqQueryQ[0], $options: 'i'}}
                                                ]});
                                        }
        else if (allReqQueryQ.length===2) {
            foundProducts = await Product.find({$and:[{$or:[{productname: {$regex: allReqQueryQ[0], $options: 'i'}},
                                                {hersteller: {$regex: allReqQueryQ[0], $options: 'i'}}
                                                ]}, {$or:[{productname: {$regex: allReqQueryQ[1], $options: 'i'}},
                                                {hersteller: {$regex: allReqQueryQ[1], $options: 'i'}}
                                                ]}]});
        }
        else {
            foundProducts = await Product.find({$and:[{$or:[{productname: {$regex: allReqQueryQ[0], $options: 'i'}},
            {hersteller: {$regex: allReqQueryQ[0], $options: 'i'}}
            ]}, {$or:[{productname: {$regex: allReqQueryQ[1], $options: 'i'}},
            {hersteller: {$regex: allReqQueryQ[1], $options: 'i'}},
            {hersteller: {$regex: allReqQueryQ[1], $options: 'i'}}
            ]}, {$or:[{productname: {$regex: allReqQueryQ[2], $options: 'i'}},
            {hersteller: {$regex: allReqQueryQ[2], $options: 'i'}}
            ]}]});
        }

        const sortedProducts = foundProducts.sort((a, b)=>{
            if (a.hersteller.toLowerCase() < b.hersteller.toLowerCase())
                return -1 
            if (a.hersteller.toLowerCase() > b.hersteller.toLowerCase())
                return 1
            return 0 
            
        })

        if (sortedProducts.length>0) {

            let products =[];
            for (let elem of sortedProducts) {
                products.push({"id": elem._id, "hersteller": elem.hersteller, "productname": elem.productname })
            }

            return res.send({error: 0, products: products})
        }
        else {
            return res.send({error: 1001,
                message: "Kein Produkt gefunden",
                products: []
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
                            zucker: foundproduct[0].zucker,
                            fett: foundproduct[0].fett,
                            gesaettigteFettsaeuren: foundproduct[0].gesaettigte_Fettsaeuren,
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