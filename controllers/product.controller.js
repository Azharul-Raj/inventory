const { getProductsService, createProductService, updateAProductService, getAProductService, bulkProductsUpdateService, deleteAProductService, bulkProductsDeleteService } = require("../services/product.services")

// get all products controller
module.exports.getProduct=async(req,res)=>{
    let filter={...req.query};
    // excluding other fields
    const excludeFields=["sort","filter","limit"];
    excludeFields.map(field=>delete filter[field]);
    /*--sort by price and--
    NOTE:In order to replace data with something we need to convert this item to string with JSON.stringify
    */
   const filterString=JSON.stringify(filter).replace(/\b(gt|gte|lt|lte)\b/g,isMatch=>`$${isMatch}`);
   
    filter=JSON.parse(filterString);
    console.log(filter);
    // console.log(replaced);
    const queryObject={};
    if(filter?.sort){
        const sortBy=filter.sort.split(",").join(" ");
        queryObject.sortBy=sortBy;
    }
    if(filter?.limit){
        queryObject.limit=parseInt(filter.limit);
    }
    try {        
        const products=await getProductsService(filter,queryObject);
        res.status(200).json({
            success:true,
            count:products.length,
            products
        })
    } catch (error) {
        res.send(error.message)
    }
}
// get a product controller
module.exports.getAProduct=async(req,res)=>{
    const {id}=req.params;
    try {
        const product=await getAProductService(id);
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        res.send(error.message);
    }
}
// create product controller
module.exports.createProduct=async(req,res)=>{
    try {        
        const product=await createProductService(req.body);
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        res.send(error.message)
    }
}
// bulk update product controller
module.exports.bulkProductUpdate=async(req,res)=>{
    const result=await bulkProductsUpdateService(req.body);
    res.status(200).json({
        success:true,
        result
    })
}
// update a product controller
module.exports.updateAProduct=async(req,res)=>{
    const {id}=req.params;
    const info=req.body;
    try {
        const result=await updateAProductService(id,info);
        res.status(200).json({
            success:true,
            result
        })
    } catch (error) {
        res.send(error.message);
    }
}
// delete a product
module.exports.deleteAProduct=async(req,res)=>{
    const {id}=req.params;
    try {
        const result=await deleteAProductService(id);
        res.status(200).json({
            success:true,
            result
        })
    } catch (error) {
        res.send(error.message);
    }
}
// bulk delete products
module.exports.bulkDeleteProducts=async(req,res)=>{
    try {
        const result=await bulkProductsDeleteService(req.body.ids);
        res.status(200).json({
            success:true,
            result
        })
    } catch (error) {
        res.json({
            success:false,
            error:error.message
        })
    }
}