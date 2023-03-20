const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes=require("./routes/product.route");
const brandRoutes=require("./routes/brand.route");


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use('/api/v1/product',productRoutes)
app.use('/api/v1/brand',brandRoutes)

module.exports = app;
