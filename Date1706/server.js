import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './Routes/authRoute.js'

dotenv.config()
const exp = express()

exp.use(cors())
exp.use(express.json())
exp.use("/api/datas",authRoute)

const Portnumber = process.env.PORT || 5000

exp.listen(Portnumber,()=>{
    console.log(`server is connected succesfully http://localhost:${Portnumber}`);
})

// http://localhost:5000/api/datas