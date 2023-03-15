const express=require("express");
const productController=require("../controllers/product.controller")

const router=express.Router();

router.route("/")
.get(productController.getProduct)
.post(productController.createProduct);
// bulk update route
router.route("/bulk-update")
.patch(productController.bulkProductUpdate);
// bulk delete route
router.route("/bulk-delete")
.delete(productController.bulkDeleteProducts);
// single product query
router.route("/:id")
.get(productController.getAProduct)
.patch(productController.updateAProduct)
.delete(productController.deleteAProduct)

module.exports=router;