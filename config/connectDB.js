const mongoose=require("mongoose");

const uri=process.env.DB_URL;
const connectDB=async()=>{
    try {
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log("database connected".yellow.italic);
    } catch (error) {
        console.log(error);
    }
}
module.exports=connectDB;