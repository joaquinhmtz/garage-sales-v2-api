let CounterScheme = require("./../models/counters.scheme");
let mongoose = require("mongoose");

const IncrementCounter = async (data) => {
    let endFolio = '';
    let findCounter = await CounterScheme.findOne({ type: data.type });

    if (findCounter.counter <= 9) endFolio = "000" + findCounter.counter.toString();
    else if (findCounter.counter >= 10 && findCounter.counter <= 99) endFolio = "00" + findCounter.counter.toString();
    else if (findCounter.counter >= 100 && findCounter.counter <= 999) endFolio = "0" + findCounter.counter.toString();
    else if (findCounter.counter >= 1000) endFolio = findCounter.counter.toString();

    let upd = await CounterScheme.updateOne({ type: data.type }, { $set: { "lasFolio" : data.prefix + '-' + endFolio }, $inc : { counter: 1 } });

    return data.prefix + '-' + endFolio;

}

const CreateObjectId = (id) => {
    return mongoose.Types.ObjectId(id);
}

module.exports.IncrementCounter = IncrementCounter;
module.exports.CreateObjectId = CreateObjectId;