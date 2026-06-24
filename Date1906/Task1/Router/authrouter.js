import express from 'express'
import { registerUser} from '../Contoller/authcontroller.js'

const route = express.Router()

route.post("/register",registerUser)
 // http://localhost:3000/api/register

export default route

