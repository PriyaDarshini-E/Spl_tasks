import express from 'express'

import { adduserData } from '../Controller/adduserData.js'
import { addCourseData } from '../Controller/addCourseData.js'
import { addEmployeeData } from '../Controller/addEmployeeData.js'

import {validateUser,validateCourse,validateEmployee} from '../Middleware/validation.js'

const route = express.Router()

route.post("/createuserdata", validateUser, adduserData)

route.post("/createcoursedata", validateCourse, addCourseData)

route.post("/createemployeedata", validateEmployee, addEmployeeData)

export default route