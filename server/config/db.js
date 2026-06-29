import mongoose from 'mongoose'

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Database not connected ${error}`)
    }
}

export default connectdb
