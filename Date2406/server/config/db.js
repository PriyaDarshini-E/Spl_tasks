import mongoose from "mongoose";

const connectdb = async()=>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI)
       console.log(`Database Connected ${conn.connection.host}`) 
    } catch (error) {
        console.log(`something error ${error}`)
    }
}

export default connectdb