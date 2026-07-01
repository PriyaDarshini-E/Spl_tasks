import express from  'express'
import { adduser, getUser } from '../Controller/authController.js'

const route = express.Router()

route.post("/createData",adduser)
// http://localhost:3000/api/register/createData

route.get("/loginUser",getUser)
// http://localhost:3000/api/register/loginUser


export default route