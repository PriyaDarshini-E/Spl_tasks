import mongoose from "mongoose";

const schema = new mongoose.Schema({
    departments:{type:[String],required:true}
},{timestamps:true})

const empModel = mongoose.model("empDepartment",schema)

export default empModel