const {default: Axios} = require("axios");
const baseUrl = "https://snipcart-entity-api.azurewebsites.net";

const getProducts = async () => {
  return await Axios.get(`${baseUrl}/Product`)
    .then((res) => res.data)
    .then((data) => data.results)
    .catch((err) => console.error(err));
};

exports.getProducts = getProducts;
