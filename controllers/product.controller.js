const { getProductsService, createProductService, updateAProductService, getAProductService, bulkProductsUpdateService } = require("../services/product.services")

// get all products controller
module.exports.getProduct=async(req,res)=>{
    try {        
        const products=await getProductsService();
        res.status(200).json({
            success:true,
            count:products.length,
            products
        })
    } catch (error) {
        res.send(error.message)
    }
}
// get a product controller
module.exports.getAProduct=async(req,res)=>{
    const {id}=req.params;
    try {
        const product=await getAProductService(id);
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        res.send(error.message);
    }
}
// create product controller
module.exports.createProduct=async(req,res)=>{
    try {        
        const product=await createProductService(req.body);
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        res.send(error.message)
    }
}
// bulk update product controller
module.exports.bulkProductUpdate=async(req,res)=>{
    const result=await bulkProductsUpdateService(req.body);
    res.status(200).json({
        success:true,
        result
    })
}
// update a product controller
module.exports.updateAProduct=async(req,res)=>{
    const {id}=req.params;
    const info=req.body;
    try {
        const result=await updateAProductService(id,info);
        res.status(200).json({
            success:true,
            result
        })
    } catch (error) {
        res.send(error.message);
    }
}
