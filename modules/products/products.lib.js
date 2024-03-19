let ProductScheme = require("./../models/products.scheme");

const GetProductList = async (data) => {
    try {
        let results = await ProductScheme.find();

        return results;

    } catch (e) {
        console.log("Err ProductSave: ", e);
        return e;
    }
}

const ProductSave = async (data) => {
    try {
        let objSave = new ProductScheme(data);
        let saveObj = await objSave.save();

        return saveObj;

    } catch (e) {
        console.log("Err ProductSave: ", e);
        return e;
    }
}

module.exports.ProductSave = ProductSave;
module.exports.GetProductList = GetProductList;