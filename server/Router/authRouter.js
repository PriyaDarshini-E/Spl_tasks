import express from 'express'
import { departments, getdata } from '../Controller/authContoller.js'

const route = express.Router()

route.post("/departments",departments)
// http://localhost:3000/api/departments

route.get("/getdata",getdata)
// http://localhost:3000/api/getdata



export default route