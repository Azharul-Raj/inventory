const mongoose=require("mongoose");
const validator=require("validator")

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a brand name"],  
        trim:true,
        lowercase:true,
        unique:true,
        maxLength:100      
    },
    description:String,   
    imageUrl:{
        type:String,
        validate:[validator.isURL,"Please provide a valid Url"]
    }
},{
    timestamps:true
})

module.exports.Category=mongoose.model("Category",categorySchema);
