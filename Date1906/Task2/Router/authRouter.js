import express from 'express'
import { createStudent, getbyid, getbyquery, userLogin } from '../Controller/authContoller.js'

const route = express.Router()

route.post("/login",userLogin)
// http://localhost:3000/api/login

route.get("/getdatabyid/:id",getbyid)
// http://localhost:3000/api/getdatabyid/101

route.get("/getdatabyquery",getbyquery)
// http://localhost:3000/api/getdatabyquery?name=Ravi

route.post("/student", createStudent)
// http://localhost:3000/api/student


export default route