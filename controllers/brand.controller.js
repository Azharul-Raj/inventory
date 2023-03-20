const {
  getBrandService,
  createBrandService,
  getBrandByIdService,
  updateBrandByIdService,
} = require("../services/brand.services");

exports.getBrands = async (req, res) => {
  try {
    const brands = await getBrandService();
    res.status(200).json({
      success: true,
      dataCount: brands.length,
      brands,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
// post a brand
exports.createBrand = async (req, res) => {
  const data = req.body;
  try {
    const result = await createBrandService(data);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
// get a brand
exports.getBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await getBrandByIdService(id);
    res.status(200).json({
      success: true,
      brand,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
// update a brand
exports.updateBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const data=req.body;
    const result = await updateBrandByIdService(id,data);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
