require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Db = require("./config/config");
const Products = require("./models/product.schema");
const DefaultData = require("./defaulData/defaultData");
const cors = require("cors");
const router = require("./Routes/routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use(router)

const port = 8080;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

//callign default data which i have set in collection ;
DefaultData(); // check atlas if it inserted succefully or not ;
