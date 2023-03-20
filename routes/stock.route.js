const express=require("express");
const stockController=require("../controllers/stock.controller");

const router=express.Router();

router.route("/")
.get(stockController.getStocks)
.post(stockController.createStock);
// dynamic route
router.route("/:id")
.get(stockController.getStockById)
.patch(stockController.updateStockById);

module.exports=router;