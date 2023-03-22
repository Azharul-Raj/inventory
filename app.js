const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes=require("./routes/product.route");
const brandRoutes=require("./routes/brand.route");
const storeRoutes=require("./routes/store.route");
const categoryRoutes=require("./routes/category.route");
const stockRoutes=require("./routes/stock.route");
const supplierRoutes=require("./routes/supplier.route");


app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use('/api/v1/product',productRoutes);
app.use('/api/v1/brand',brandRoutes);
app.use('/api/v1/store',storeRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/stock',stockRoutes);
app.use('/api/v1/supplier',supplierRoutes);

module.exports = app;
