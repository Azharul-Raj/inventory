const mongoose=require("mongoose");

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
        required:true
    },
    website:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:[true,"Product status is required"],
        enum:{
            values:["in-stock","out-of-stock","discontinued"],
            message:"Product status must be in-stock/out-of-stock/discontinued"
        },
    },
    products:{
        type:mongoose.Schema.Types.ObjectId
    },
    supplier:{
        type:mongoose.Schema.Types.ObjectId
    }
},{
    timestamps:true
})

const Brand=mongoose.model("Brand",brandSchema);
module.exports=Brand;