let ProductsRoute = require("./products/products.route");

module.exports = (app, router) => {
    ProductsRoute(app, router);
};