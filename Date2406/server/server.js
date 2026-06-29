import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './Router/authRouter.js'
import connectdb from './config/db.js'

dotenv.config()
connectdb()

const exp = express()

exp.use(cors())
exp.use(express.json())
exp.use("/api",authRoute)

const Port_number = process.env.Port || 5000

exp.listen(Port_number,()=>{
    console.log(`Server Connected http://localhost:${Port_number}`)
})

//http://localhost:3000/api