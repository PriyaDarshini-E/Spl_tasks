import mongoose from 'mongoose'

const empSchmea = new mongoose.Schema({
    departments:{type:[String],required:true}
},{timestamps:true})

const empModel = mongoose.model("empDepartment",empSchmea)

export default empModel