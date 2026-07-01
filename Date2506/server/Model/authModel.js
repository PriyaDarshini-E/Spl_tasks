import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    Confirm_Password:{type:String,required:true}

},{timestamps:true})

const userModel = mongoose.model("userRegister",schema)

export default userModel