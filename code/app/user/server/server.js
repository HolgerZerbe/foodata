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

        const product = await Product.find({ean:{$in:req.query.ean}});
        return res.send(res.json(product))
    } else {
        return res.send({
            message: "Willkommen bei Foodata"
        });
    }
});

app.get('/search', async (req, res) => {
    if (req.query) {

        const product = await Product.find({productname: {$regex: req.query.q, $options: 'i'}});
        return res.send(res.json(product))
    } else {
        return res.send({
            message: "No product found"
        });
    }
});

console.log('Server gestartet')


app.listen(3001);