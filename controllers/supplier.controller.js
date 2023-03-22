const { updateSupplierByIdService, getSupplierByIdService, createSupplierService, getSupplierService, deleteSupplierByIdService } = require("../services/supplier.services");

exports.getSuppliers = async (req, res) => {
    try {
      const suppliers = await getSupplierService();
      res.status(200).json({
        success: true,
        dataCount: suppliers.length,
        suppliers,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // post a brand
  exports.createSupplier = async (req, res) => {
    const data = req.body;
    try {
      const result = await createSupplierService(data);
      res.status(200).json({
        success: true,
        result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // get a brand
  exports.getSupplierById = async (req, res) => {
    try {
      const { id } = req.params;
      const supplier = await getSupplierByIdService(id);
      res.status(200).json({
        success: true,
         supplier,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // update a brand
  exports.updateSupplierById = async (req, res) => {
    try {
      const { id } = req.params;
      const data=req.body;
      const result = await updateSupplierByIdService(id,data);
      res.status(200).json({
        success: true,
        result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // delete a supplier
  exports.deleteSupplierById=async(req,res)=>{
    try {
      const {id}=req.params;
      const result=await deleteSupplierByIdService(id);
      res.status(200).json({
        success: true,
        result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  }