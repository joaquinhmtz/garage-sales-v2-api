let mongoose = require("mongoose");
let Scheme = mongoose.Schema;

let ProductScheme = new Scheme({
    folio: { type: String, trim: true, uppercase: true },
    name: { type: String, trim: true, require: true },
    description: { type: String, trim: true },
    size: { type: String, trim: true, require: true },
    brand: { type: String, trim: true, require: true },
    price: { type: Number, default: 0, require: true },
    saleVersion: { type: String, trim: true },
    coverPhoto: { type: String, trim: true },
    photos: [ { type: String } ],
    creationDate: { type: Date, default: Date.now() },
    active: { type: Boolean, default: true }
});

module.exports = mongoose.model("Products", ProductScheme);