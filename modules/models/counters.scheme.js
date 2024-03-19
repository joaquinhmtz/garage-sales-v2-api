let mongoose = require("mongoose");
let Scheme = mongoose.Schema;

let CounterScheme = new Scheme({
    type: { type: String },
    counter: { type: Number, default: 0 },
    lasFolio: { type: String, trim: true, uppercase: true }
});

module.exports = mongoose.model("Counters", CounterScheme);