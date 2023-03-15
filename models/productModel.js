const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"You must provide the name."],
        minLength:[3,"Name should be at least 3 characters."],
        maxLength:[100,"Name is too long."],
        unique:[true,"Name must be unique"]
    },
    description:{
        type:String,
        required:[true,"Please provide the description"]
    },
    price:{
        type:Number,
        required:[true,"Price should be given"],
        min:[0,"Price can't be a negative number"],
    },
    unit:{
        type:String,
        required:[true,"Unit is required"],
        enum:{
            values:["kg,liter,pcs"],
            message:"Unit should be is kg/liter/pcs"
        }
    },
    quantity:{
        type:Number,
        required:[true,"Please provide product quantity"],
        min:[0,"Quantity can't be a negative number."],
        validate:{
            validator:(value)=>{
                const isInt=Number.isInteger(value);
                if(isInt) true;
                return false;
            },
        },
        message:"Quantity value should be a Integer type."
    },
    status:{
        type:String,
        required:[true,"Product status is required."],
        enum:{
            values:["in-stock","out-of-stock","discontinued"],
            message:"Status should be within in-stock/out-of-stock/discontinued"
        }
    },
    categories:[{
        name:{
            type:String,
            required:true
        },
        _id:mongoose.Schema.Types.ObjectId
    }],
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier"
    }
},{
    timestamps:true
})

module.exports.Product=mongoose.model("Product",productSchema);