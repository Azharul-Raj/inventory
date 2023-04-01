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
    password:{
        type:String,
        required:[true,"Password is required"],
        validate:{
            validator:(value)=>
                validator.isStrongPassword(value,{
                    minLength:6,
                    minLowercase:1,
                    minUppercase:1
                }),            
            message:"Password should contain min a lowercase a uppercase."
        }
    },
    confirmPassword:{
        type:String,
        required:[true,"Type your confirm Password is required"],
        validate:{
            validator:(value)=>
                validator.isStrongPassword(value,{
                    minLength:6,
                    minLowercase:1,
                    minUppercase:1
                }),            
            message:"Password should contain min a lowercase a uppercase."
        }
    },
    contactNumber:String,
    role:{
        type:String,
        required:[true,"Role selection is required"],
        enum:{
            values:["user","seller","admin","modaretor","manager","supplier"],
            message:"{VALUE} is not a correct role.Please pass a right role."
        }
    },
    location:String,
    brand:String
})

module.exports.User=mongoose.model("User",userSchema);