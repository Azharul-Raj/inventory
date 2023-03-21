const mongoose=require("mongoose");
const validator=require("validator");
const {ObjectId}=mongoose.Schema.Types;

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,"You must provide the name."],
        minLength:[3,"Name should be at least 3 characters."],
        maxLength:[100,"Name is too long."],
        unique:[true,"Name must be unique"]
    },
    description:{
        type:String,
        required:[true,"Please provide the description"]
    },
   imageUrls:[{
    type:String,
    required:true,
    validate:(value)=>{
        validator.isURL(value)
    },
    message:"Provide a valid url"
}],
    unit:{
        type:String,
        required:[true,"Unit is required"],
        enum:{
            values:["kg","liter","pcs","bag"],
            message:"Unit can't be {VALUE} it should be in kg/liter/pcs/bag"
        }
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        name:{
            type:String,
            required:true
        },
        id:{
            type:ObjectId,
            ref:"Brand",
            required:true
        }
    },    
    supplier:{
        type:ObjectId,
        ref:"Supplier"
    }
},{
    timestamps:true
})

module.exports.Product=mongoose.model("Product",productSchema);