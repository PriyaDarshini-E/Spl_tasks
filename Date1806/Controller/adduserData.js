export const adduserData = async (req, res) => {
    try {

        const userData = req.body

        res.status(201).json({
            message: "User Data Added Successfully",
            data: userData
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}

export const getUserById = (req, res) => {

    const userId = req.params.id

    res.status(200).json({
        message: "User Fetched Successfully",
        userId
    })
}

export const searchUser = (req, res) => {

    const { name, city } = req.query

    res.status(200).json({
        message: "Query Data Received",
        name,
        city
    })
}

export const createUser = (req, res) => {

    const { userid, username, email } = req.body

    res.status(201).json({
        message: "User Created Successfully",
        userid,
        username,
        email
    })
}

export const getProfile = (req, res) => {

    const token = req.headers.authorization

    res.status(200).json({
        message: "Header Data Received",
        token
    })
}


