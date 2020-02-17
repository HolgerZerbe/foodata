const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const products = new Schema ({
    ean: Array,
    productname: String,
    hersteller: String,
    handelskette: Array,
    productGroup: String,
    brennwertKCAL: Number,
    kohlenhydrate: Number,
    zucker: Number,
    fett: Number,
    gesaettigte_Fettsaeuren: Number,
    natrium: Number,
    protein: Number,
    ballaststoffe: Number,
    obstGemueseNuesseAnteil: Number
    
});

module.exports = mongoose.model('Product',products);
