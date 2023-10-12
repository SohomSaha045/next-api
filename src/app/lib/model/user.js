import mongoose from "mongoose";
const userModel=new mongoose.Schema({
    name: String ,
    age:String,
    email:String
    
}
)
export const User=mongoose.models.Users || mongoose.model("Users",userModel);