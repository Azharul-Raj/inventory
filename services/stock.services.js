const { Stock } = require("../models/stock.model");

exports.getStockService=async()=>{    
    const stocks=await Stock.find({})
    return stocks;
}
// create stock service
exports.createStockService=async(data)=>{
    const result=await Stock.create(data);
    return result;
}
// get a stock
exports.getStockByIdService=async(id)=>{
    const stock=await Stock.findById(id);
    return stock;
}
// update stock by id
exports.updateStockByIdService=async(id,data)=>{
    const result=await Stock.findByIdAndUpdate(id,{$set:data});
    return result;
}
// delete stock by id
exports.deleteStockByIdService=async(id)=>{
    const result=await Stock.findByIdAndDelete({_id:id});
    return result;
}