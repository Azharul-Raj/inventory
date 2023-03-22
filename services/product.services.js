const { Product } = require("../models/product.model");
const {Brand}=require("../models/brand.model");

// get products services
module.exports.getProductsService = async (filter, queryObject) => {
  const products = await Product.find(filter)
    // .skip(0)
    // .limit(queryObject.limit)
    // // .select({ __v: 0 })
    // .sort(queryObject.sortBy);
    // console.log(products)
  return products;
};
// get a product service
module.exports.getAProductService = async (id) => {
  const product = await Product.findOne({ _id: id });
  return product;
};
// create product service
module.exports.createProductService = async (data) => {
  const product = await Product.create(data);
  const {_id:productId,brand}=product;
  const update=await Brand.findByIdAndUpdate({_id:brand.id},{$push:{"products":productId}})
  return product;
};

// update a product service
module.exports.updateAProductService = async (filter, updateInfo) => {
  const result = await Product.findByIdAndUpdate(
    { _id: filter },
    { $set: updateInfo },
    { new: true }
  );
  return result;
};
// bulk product update
module.exports.bulkProductsUpdateService = async (data) => {
  // const result=await Product.updateMany({_id:data.ids},data.data,{
  //     runValidators:true
  // })
  const products = [];
  data.ids.forEach((productId) => {
    products.push(Product.updateOne({ _id: productId }, data.data));
  });
  const result = await Promise.all(products);
  return result;
};

// delete a product
module.exports.deleteAProductService = async (productId) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};
// bulk delete
module.exports.bulkProductsDeleteService = async (ids) => {
  const result = await Product.deleteMany({ _id: ids });
  return result;
};
