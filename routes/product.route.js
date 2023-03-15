const express=require("express");
const productController=require("../controllers/product.controller")

const router=express.Router();

router.route("/")
.get(productController.getProduct)
.post(productController.createProduct);

router.route("/:id")
.get(productController.getAProduct)
.patch(productController.updateAProduct)

module.exports=router;