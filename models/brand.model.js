const mongoose=require("mongoose");
const validator=require("validator")
const {ObjectId}=mongoose.Schema.Types;

const brandSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a brand name"],  
        trim:true,
        unique:true,
        maxLength:100      
    },
    description:{
        type:String,
        required:[true,"Provide your brand description"]
    },
    email:{
        type:String,
        validate:[validator.isEmail,"Please provide a valid email"]
    },
    website:{
        type:String,
        validate:[validator.isURL,"Please provide a an URL"]
    },
    location:{
        type:String,
    },
    products:[{
        type:ObjectId,
        ref:"Product"
    }],
    supplier:[{
        name:String,
        contactNumber:String,
        id:{
            type:ObjectId,
            ref:"Supplier"
        },        
    }],
    status:{
        type:String,
        enum:{
            values:["active","inactive"],
            default:"active",
            message:"{VALUE} isn't assignable to status.{VALUE} should be active/inactive"
        },
    }
},{
    timestamps:true
})

module.exports.Brand=mongoose.model("Brand",brandSchema);