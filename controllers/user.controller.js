const { getUserService, createUserService, getUserByIdService, updateUserByIdService } = require("../services/user.services");


exports.getUsers = async (req, res) => {
    try {
      const users = await getUserService();
      res.status(200).json({
        success: true,
        dataCount: users.length,
        users,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // post a brand
  exports.createUser = async (req, res) => {
    const data = req.body;
    try {
      const result = await createUserService(data);
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
  exports.getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await getUserByIdService(id);
      res.status(200).json({
        success: true,
         user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
  // update a brand
  exports.updateUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data=req.body;
      const result = await updateUserByIdService(id,data);
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