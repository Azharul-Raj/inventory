const express=require("express");
const supplierController=require("../controllers/supplier.controller");

const router=express.Router();

router.route("/")
.get(supplierController.getSuppliers)
.post(supplierController.createSupplier);
// dynamic supplier
router.route("/:id")
.get(supplierController.getSupplierById)
.patch(supplierController.updateSupplierById)
.delete(supplierController.deleteSupplierById);



module.exports=router;