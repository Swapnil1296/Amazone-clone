const Products = require("../models/product.schema");
const productsdata = require("../constant/productdata");

// storign productsdata into products collection manually without using postmen;
const DefaultData = async () => {
  try {
    await Products.deleteMany({}); // to avoid multiple data insert when save the page;
    const storeData = await Products.insertMany(productsdata);
    // console.log(storeData);
  } catch (error) {
    console.log("error" + error.message);
  }
};

module.exports = DefaultData;
