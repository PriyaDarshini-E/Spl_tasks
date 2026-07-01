import mongoose from 'mongoose'

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected successfully ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
    
}

export default connectdb