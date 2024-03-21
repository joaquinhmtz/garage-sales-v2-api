let ProductScheme = require("./../models/products.scheme");
let GlobalUtils = require("./../utils/helpers");

const GetProductList = async (data) => {
    try {
        let results = await ProductScheme.find();

        return results;

    } catch (e) {
        console.log("Err ProductSave: ", e);
        throw new Error(e);
    }
}

const ProductSave = async (data) => {
    try {
        let objSave = new ProductScheme(data);
        let saveObj = await objSave.save();

        return saveObj;

    } catch (e) {
        throw new Error(e);
    }
}

const DeleteProduct = async (data) => {
    try {
        let dlt = await ProductScheme.deleteOne({ _id : GlobalUtils.CreateObjectId(data._id) });

        return dlt;

    } catch (e) {
        throw new Error(e);
    }
}

module.exports.ProductSave = ProductSave;
module.exports.GetProductList = GetProductList;
module.exports.DeleteProduct = DeleteProduct;