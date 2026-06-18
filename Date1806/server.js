import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const exp = express();

exp.use(cors())
exp.use(express.json())

exp.use("/api/register",authRoute);

const Portnumber = process.env.PORT || 5000

exp.listen(Portnumber,()=>{
    console.log(`server is connected succesfully http://localhost:${Portnumber}`);
})