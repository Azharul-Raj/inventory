const { User } = require("../models/user.model");


exports.getUserService=async()=>{    
    const brands=await User.find({})
    return brands;
}
// create user service
exports.createUserService=async(data)=>{
    const result=await User.create(data);
    return result;
}
// get a user
exports.getUserByIdService=async(id)=>{
    const brand=await User.findById(id);
    return brand;
}
// update user by id
exports.updateUserByIdService=async(id,data)=>{
    const result=await User.findByIdAndUpdate(id,{$set:data});
    return result;
}
// delete user by id
exports.deleteUserByIdService=async(id)=>{
    const result=await User.findByIdAndDelete({_id:id});
    return result;
}