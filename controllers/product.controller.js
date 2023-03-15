const { Product } = require("../models/productModel")

module.exports.getProduct=async(req,res)=>{
    const products=await Product.find({});
    res.status(200).json({
        success:true,
        products
    })
}

module.exports.createProduct=async(req,res)=>{
    const product=await Product.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
}
