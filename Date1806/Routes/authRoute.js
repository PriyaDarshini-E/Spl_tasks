import express from 'express'

const route = express.Router()

route.post("/createuserdata", adduserData)
route.get("/user/:id", getUserById)
route.get("/search", searchUser)
route.post("/createuser", createUser)
route.get("/profile", getProfile)

export default Route