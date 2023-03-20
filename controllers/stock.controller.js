exports.getStocks = async (req, res) => {
    try {
      const stocks = await getStockService();
      res.status(200).json({
        success: true,
        dataCount: stocks.length,
        stocks,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // post a brand
  exports.createStock = async (req, res) => {
    const data = req.body;
    try {
      const result = await createStockService(data);
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
  exports.getStockById = async (req, res) => {
    try {
      const { id } = req.params;
      const stock = await getStockByIdService(id);
      res.status(200).json({
        success: true,
        stock,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // update a brand
  exports.updateStockById = async (req, res) => {
    try {
      const { id } = req.params;
      const data=req.body;
      const result = await updateStockByIdService(id,data);
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
  