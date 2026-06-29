import express from 'express'
import { empDepartment, getempdepartment } from '../Controller/authController.js'

const route = express.Router()

route.post("/department",empDepartment)
// http://localhost:3000/api/department

route.get("/getdepartment",getempdepartment)
// http://localhost:3000/api/getdepartment
export default route