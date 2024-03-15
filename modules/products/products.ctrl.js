const GetProductList = async (req, res) => {
    try {
        console.log("Todo bien");

        res.status(200).send({ success: true, msg: "Controlador de productos" });

    } catch (e) {
        console.log("Error - GetProductList: ", e);
        res.status(500).json({ message: e.toString() });
    }
}

const SaveProduct = async (req, res) => {
    try {
        console.log("Todo bien save");

        res.status(200).send({ success: true, msg: "Controlador de guardado de productos" });

    } catch (e) {
        console.log("Error - SaveProduct: ", e);
        res.status(500).json({ message: e.toString() });
    }
}

module.exports.GetProductList = GetProductList;
module.exports.SaveProduct = SaveProduct;