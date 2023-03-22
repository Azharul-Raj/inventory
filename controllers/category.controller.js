const {
  getCategoryService,
  createCategoryService,
  getCategoryByIdService,
  updateCategoryByIdService,
  deleteCategoryByIdService,
} = require("../services/category.services");

exports.getCategories = async (req, res) => {
  try {
    const categories = await getCategoryService();
    res.status(200).json({
      success: true,
      dataCount: categories.length,
      categories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
// post a brand
exports.createCategory = async (req, res) => {
  const data = req.body;
  try {
    const result = await createCategoryService(data);
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
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategoryByIdService(id);
    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
// update a brand
exports.updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateCategoryByIdService(id, data);
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
// delete a category
exports.deleteCategoryById=async(req,res)=>{
  try {
    const {id}=req.params;
    const result=await deleteCategoryByIdService(id);
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
}