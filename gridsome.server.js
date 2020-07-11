// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const productApi = require("./src/services/productApi.js");

module.exports = function(api) {
  api.loadSource(async (actions) => {
    const collection = actions.addCollection("Product");

    const res = productApi.getProducts();
    const data = res.data;

    data.forEach((element) => {
      collection.addNode({
        id: element.id,
        name: element.name,
        images: {
          big: element.images.big,
          small: element.images.small,
        },
        descriptions: {
          short: element.descriptions.short,
          long: element.descriptions.long,
        },
        price: element.price,
      });
    });
  });
};
