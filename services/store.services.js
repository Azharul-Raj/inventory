const { Store } = require("../models/brand.model");

exports.getStoreService=async()=>{    
    const brands=await Store.find({})
    return brands;
}
// create store service
exports.createStoreService=async(data)=>{
    const result=await Store.create(data);
    return result;
}
// get a store
exports.getStoreByIdService=async(id)=>{
    const brand=await Store.findById(id);
    return brand;
}
// update store by id
exports.updateStoreByIdService=async(id,data)=>{
    const result=await Store.findByIdAndUpdate(id,{$set:data});
    return result;
}