const {  getBrandService, createBrandService } = require("../services/brand.services")

exports.getBrands=async(req,res)=>{
    try {        
        const brands= await getBrandService();
        res.status(200).json({
            success:true,
            dataCount:brands.length,
            brands
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}
// post a brand
exports.createBrand=async(req,res)=>{
    const data=req.body;
    try {
        const brand=await createBrandService(data);
        res.status(200).json({
            success:true,            
            brand
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:error.message
        })
    }
}