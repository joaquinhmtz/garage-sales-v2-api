let ProductsCtrl = require("./products.ctrl");

module.exports = (app, router) => {
    router.get("/api/v1/products/get/list", ProductsCtrl.GetProductList);
    router.post("/api/v1/products/post/save", ProductsCtrl.SaveProduct);
}