const { Stock } = require("../models/stock.model");

exports.getStockService=async()=>{    
    const brands=await Stock.find({})
    return brands;
}
// create brand service
exports.createBrandService=async(data)=>{
    const result=await Stock.create(data);
    return result;
}
// get a brand
exports.getStockByIdService=async(id)=>{
    const brand=await Stock.findById(id);
    return brand;
}
// update brand by id
exports.updateStockByIdService=async(id,data)=>{
    const result=await Stock.findByIdAndUpdate(id,{$set:data});
    return result;
}