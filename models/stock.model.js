const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = new mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "You must provide the name."],
      minLength: [3, "Name should be at least 3 characters."],
      maxLength: [100, "Name is too long."],
      unique: [true, "Name must be unique"],
    },
    description: {
      type: String,
      required: [true, "Please provide the description"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: [0, "Quantity can't be negative"],
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message:
          "{VALUE} is not assignable to status.Status must be within in-stock/out-of-stock/discontinued",
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
    suppliedBy: {
      name: {
        type: String,
        trim: true,
        required: [true, "Please provide a supplier name"],
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
    },
    imageUrls: [
      {
        type: String,
        required: true,
        // validate function is receiving an array of image url
        validate: (value) => {
          let isValid = true;
          if (!Array.isArray(value)) return false;
          value.forEach((url) => {
            if (!validator.isURL(url)) {
              // if any of the urls is not a valid url it's returning false
              isValid = false;
            }
          });
          return isValid;
        },
      },
    ],
    category: {
      type: String,
      required: true,
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
