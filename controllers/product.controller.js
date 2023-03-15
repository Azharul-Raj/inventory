const { Product } = require("../models/productModel")
const { getProductsService, createProductService } = require("../services/product.services")

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
