const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"You must provide the name."],
        minLength:[3,"Name should be at least 3 characters."],
        maxLength:[100,"Name is too long."],
    }
})