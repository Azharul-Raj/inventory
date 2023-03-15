const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes=require("./models/productModel")


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use('/api/v1/product')


module.exports = app;
