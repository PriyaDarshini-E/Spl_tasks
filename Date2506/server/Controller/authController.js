import userModel from "../Model/authModel.js"

export const adduser = async (req, res) => {
    try {
        const { Name, Email, Password, Confirm_Password } = req.body
        if (Password != Confirm_Password) {
            return res.status(401).json({ msg: "password mismatch" })
        }

        const userDatas = await userModel.create(req.body)
        return res.status(200).json({ msg: "Register succesfully" })


    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}


export const getUser = async (req, res) => {
    try {
        const { Email, Password } = req.body
        const databaseEmailpwd = await userModel.findOne({ Email, Password })
        if (!databaseEmailpwd) {
            res.status(400).json({ msg:"Invalid email or password" })
        }

        return res.status(200).json({msg:"Login successful",databaseEmailpwd})

    } catch (error) {
        console.log(error)
        res.status(400).json({ error })
    }
}
