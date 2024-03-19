let CounterUtils = require("./../utils/helpers");
let ProductsLib = require("./products.lib");

const GetProductList = async (req, res) => {
    try {
        console.log("Todo bien");
        let data = req.body;
        let results = await ProductsLib.GetProductList();

        res.status(200).send({ success: true, data: results });

    } catch (e) {
        console.log("Error - GetProductList: ", e);
        res.status(500).json({ message: e.toString() });
    }
}

const SaveProduct = async (req, res) => {
    try {
        let data = req.body;
        data["type"] = "products";
        data["prefix"] = "P";
        data["folio"] = await CounterUtils.IncrementCounter(data);
        let save = await ProductsLib.ProductSave(data);

        res.status(200).send({ success: true, msg: "El producto se guardo correctamente" });

    } catch (e) {
        console.log("Error - SaveProduct: ", e);
        res.status(500).json({ message: e.toString() });
    }
}

module.exports.GetProductList = GetProductList;
module.exports.SaveProduct = SaveProduct;