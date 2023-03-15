const { Product } = require("../models/productModel");

// get products services
module.exports.getProductsService=async()=>{
    const products=await Product.find({}).select({__v:0});
    return products;
}
// get a product service
module.exports.getAProductService=async(id)=>{
    const product=await Product.findOne({_id:id});
    return product;
}
// create product service
module.exports.createProductService=async(data)=>{
    const product=await Product.create(data);
    return product;
}

// update a product service
module.exports.updateAProductService=async(filter,updateInfo)=>{
    const result=await Product.findOneAndUpdate({_id:filter},{$set:updateInfo},{new:true});
    return result;
}