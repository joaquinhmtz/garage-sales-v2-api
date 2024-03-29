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
        res.status(500).json({ msg: e.toString() });
    }
}

const SaveProduct = async (req, res) => {
    try {
        let data = req.body;
        data["photos"] = [];
        data["type"] = "products";
        data["prefix"] = "P";
        data["folio"] = await CounterUtils.IncrementCounter(data);
        let save = await ProductsLib.ProductSave(data);

        res.status(200).send({ success: true, msg: "El producto se guardo correctamente" });

    } catch (e) {
        console.log("Error - SaveProduct: ", e);
        res.status(500).json({ msg: e.toString(), status: 500, success: false });
    }
}

const DeleteProduct = async (req, res) => {
    try {
        let data = req.body;
        let dlt = await ProductsLib.DeleteProduct(data);

        res.status(200).send({ success: true, msg: "El producto se elimino correctamente" });

    } catch (e) {
        console.log("Error - DeleteProduct: ", e);
        res.status(500).json({ msg: e.toString(), status: 500, success: false });
    }
}

module.exports.GetProductList = GetProductList;
module.exports.SaveProduct = SaveProduct;
module.exports.DeleteProduct = DeleteProduct;