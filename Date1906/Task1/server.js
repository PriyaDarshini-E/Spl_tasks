    import express from 'express'
    import cors from 'cors'
    import dotenv from 'dotenv'
    import authrouter from './Router/authrouter.js'


    dotenv.config()

    const exp = express()

    exp.use(cors())
    exp.use(express.json())

    exp.use("/api",authrouter)

    const Port_number = process.env.Port;

    exp.listen(Port_number,()=>{
        console.log(`server connected sucessfully http://localhost:${Port_number}`)
    })

    //http://localhost:3000/api