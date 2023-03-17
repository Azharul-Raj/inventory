const mongoose=require("mongoose");
const validator=require("validator");
const {ObjectId}=mongoose.Schema.Types;

const storeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a store name"],  
        trim:true,
        lowercase:true,  
        enum:{
            values:["dhaka","chattogram","rangpur","rajshahi","khulna","barishal"],
            message:"{VALUE} is not valid"
        }
    },
    description:String,   
    imageUrl:{
        type:String,
        validate:[validator.isURL,"Please provide a valid Url"]
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    },
    manager:{
        name:String,
        contactNumber:String,
        id:{
            type:ObjectId,
            ref:"User"
        }
    }
},{
    timestamps:true
})

module.exports.Store=mongoose.model("Store",storeSchema);
