import express from  'express'
import { adduser } from '../Controller/authController.js'

const route = express.Router()

route.post("/createData",adduser)


export default route