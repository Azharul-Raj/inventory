const { Category } = require("../models/category.model");

exports.getCategoryService=async()=>{    
    const categories=await Category.find({})
    return categories;
}
// create brand service
exports.createCategoryService=async(data)=>{
    const result=await Category.create(data);
    return result;
}
// get a brand
exports.getCategoryByIdService=async(id)=>{
    const category=await Category.findById(id);
    return category;
}
// update brand by id
exports.updateCategoryByIdService=async(id,data)=>{
    const result=await Category.findByIdAndUpdate(id,{$set:data});
    return result;
}
// delete category by id
exports.deleteCategoryByIdService=async(id)=>{
    const result=await Category.findByIdAndDelete({_id:id});
    return result;
}