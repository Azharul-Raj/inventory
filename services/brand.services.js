const {Brand}=require("../models/brand.model")
exports.getBrandService=async()=>{    
    const brands=await Brand.find({})
    return brands;
}
// create brand service
exports.createBrandService=async(data)=>{
    const brand=await Brand.create(data);
    return brand;
}