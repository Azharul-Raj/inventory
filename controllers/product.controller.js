const {
  getProductsService,
  createProductService,
  updateAProductService,
  getAProductService,
  bulkProductsUpdateService,
  deleteAProductService,
  bulkProductsDeleteService,
} = require("../services/product.services");

// get all products controller
module.exports.getProduct = async (req, res) => {
  let filter = { ...req.query };
  // excluding other fields
  /*--sort by price and--
    NOTE: 
    1.First we are stringifying the filter data.
    2. then if inside of this object (gt|gte|lt|lte) those property matches we are replacing this
    items with `$` for example like this $gt
    */
  if (filter.price) {
    const filterString = JSON.stringify(filter).replace(
      /\b(gt|gte|lt|lte)\b/g,
      (isMatch) => `$${isMatch}`
    );
    filter = JSON.parse(filterString);
  }
//   console.log(filter);
  const queryObject = {};
  if (filter?.sort) {
    const sortBy = filter.sort.split(",").join(" ");
    queryObject.sortBy = sortBy;
  }
  if(filter?.page){
    console.log("from apge");
    const {page=1,limit=2}=req.query;
    const skip=parseInt(page-1)*parseInt(limit);
    queryObject.skip=skip;
  }
  if (filter?.limit) {
    queryObject.limit = parseInt(filter.limit);
  }
  // exclude other fields while we are filtering;
  const excludeFields = ["sort", "filter", "limit"];
  excludeFields.forEach((field) => delete filter[field]);
  try {
    const products = await getProductsService(filter, queryObject);
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.send(error.message);
  }
};
// get a product controller
module.exports.getAProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getAProductService(id);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.send(error.message);
  }
};
// create product controller
module.exports.createProduct = async (req, res) => {
  try {
    const product = await createProductService(req.body);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.send(error.message);
  }
};
// bulk update product controller
module.exports.bulkProductUpdate = async (req, res) => {
  const result = await bulkProductsUpdateService(req.body);
  res.status(200).json({
    success: true,
    result,
  });
};
// update a product controller
module.exports.updateAProduct = async (req, res) => {
  const { id } = req.params;
  const info = req.body;
  try {
    const result = await updateAProductService(id, info);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.send(error.message);
  }
};
// delete a product
module.exports.deleteAProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteAProductService(id);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.send(error.message);
  }
};
// bulk delete products
module.exports.bulkDeleteProducts = async (req, res) => {
  try {
    const result = await bulkProductsDeleteService(req.body.ids);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};
