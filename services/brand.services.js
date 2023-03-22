const { Brand } = require("../models/brand.model");

exports.getBrandService=async()=>{    
    const brands=await Brand.find({})
    return brands;
}
// create brand service
exports.createBrandService=async(data)=>{
    const result=await Brand.create(data);
    return result;
}
// get a brand
exports.getBrandByIdService=async(id)=>{
    const brand=await Brand.findById(id);
    return brand;
}
// update brand by id
exports.updateBrandByIdService=async(id,data)=>{
    const result=await Brand.findByIdAndUpdate(id,{$set:data});
    return result;
}
// delete brand by id
exports.deleteBrandByIdService=async(id)=>{
    const result=await Brand.findByIdAndDelete({_id:id});
    return result;
}