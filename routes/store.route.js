const express=require("express");
const storeController=require("../controllers/store.controller");

const router=express.Router();

router.route("/")
.get(storeController.getStores)
.post(storeController.createStore);
// dynamic data getting and updating
router.route("/:id")
.get(storeController.getStoreById)
.patch(storeController.updateStoreById);


module.exports=router;