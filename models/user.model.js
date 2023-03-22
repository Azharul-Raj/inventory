const mongoose=require("mongoose");
const validator=require("validator");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:[validator.isEmail,"Please correct your email format."]
    },
    contactNumber:String,
    role:{
        type:String,
        required:[true,"Role selection is required"],
        enum:{
            values:["user","seller","admin","modaretor","manager"],
            message:"{VALUE} is not a correct role.Please pass a right role."
        }
    },
    location:String
})

module.exports.User=mongoose.model("User",userSchema);