const {Supplier}=require("../models/supplier.model")

exports.getSupplierService=async()=>{    
    const supplier=await Supplier.find({})
    return supplier;
}
// create store service
exports.createSupplierService=async(data)=>{
    const result=await Supplier.create(data);
    return result;
}
// get a store
exports.getSupplierByIdService=async(id)=>{
    const supplier=await Supplier.findById(id);
    return supplier;
}
// update store by id
exports.updateSupplierByIdService=async(id,data)=>{
    const result=await Supplier.findByIdAndUpdate(id,{$set:data});
    return result;
}
// delete supplier by id
exports.deleteSupplierByIdService=async(id)=>{
    const result=await Supplier.findByIdAndDelete({_id:id});
    return result;
}