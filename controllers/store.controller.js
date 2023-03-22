const {
    getStoreService,
    createStoreService,
    getStoreByIdService,
    updateStoreByIdService,
  } = require("../services/store.services");
  
  exports.getStores = async (req, res) => {
    try {
      const stores = await getStoreService();
      res.status(200).json({
        success: true,
        dataCount: stores.length,
        stores,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // post a brand
  exports.createStore = async (req, res) => {
    const data = req.body;
    try {
      const result = await createStoreService(data);
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
  exports.getStoreById = async (req, res) => {
    try {
      const { id } = req.params;
      const store = await getStoreByIdService(id);
      res.status(200).json({
        success: true,
         store,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // update a brand
  exports.updateStoreById = async (req, res) => {
    try {
      const { id } = req.params;
      const data=req.body;
      const result = await updateStoreByIdService(id,data);
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