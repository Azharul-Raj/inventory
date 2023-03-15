const { Product } = require("../models/productModel");

// get products services
module.exports.getProductsService=async()=>{
    const products=await Product.find({}).select({__v:0});
    return products;
}
// create product service
module.exports.createProductService=async(data)=>{
    const product=await Product.create(data);
    return product;
}