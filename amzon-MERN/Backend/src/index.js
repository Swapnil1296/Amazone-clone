require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Db = require("./config/config");
const Products = require("./models/product.schema");
const DefaultData = require("./defaulData/defaultData");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

//callign default data which i have set in collection ;
DefaultData();
