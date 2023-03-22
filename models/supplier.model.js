const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "You must provide the name."],
      minLength: [3, "Name should be at least 3 characters."],
      maxLength: [100, "Name is too long."],
      unique: [true, "Name must be unique"],
    },
    email: {
      type: String,
      required: [true, "Please provide the the email"],
      validate:[validator.isEmail,"Provide a valid email"],
      trim:true,
      unique:true
    },
    contactNumber:{
        type:String,
        required:[true,"Please provide a contact number"],
        validate:{
            validator:(value)=>{
                return validator.isMobilePhone(value);
            },
            message:"Type should be is contact number formate."
        }
    },
    emergencyContactNumber:{
        type:String,
        required:[true,"Please provide a contact number"],
        validate:{
            validator:(value)=>{
                return validator.isMobilePhone(value);
            },
            message:"Type should be is contact number formate."
        }
    },
    tradeLicense:{
        type:String,
        required:[true,"Please provide your license number."]
    },
    presentAddress:{
        type:String,
        required:[true,"Provide your present address"]
    },
    imageUrl:{
        type:String,
        validate:[validator.isURL,"Please provide an image url."],
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["active", "inactive"],
        message:
          "{VALUE} is not assignable to status.Status must be within active/inactive",
      },
    },
    store: {
      name: {
        type: String,
        required: [true, "Please provide a store name"],
        trim: true,
        lowercase: true,
        enum: {
          values: [
            "dhaka",
            "chattogram",
            "rangpur",
            "rajshahi",
            "khulna",
            "barishal",
          ],
          message: "{VALUE} is not valid",
        },
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "Store",
      },
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Stock = mongoose.model("Stock", stockSchema);
