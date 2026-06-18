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


export const addCourseData = async (req, res) => {
    try {

        const courseData = req.body

        res.status(201).json({
            message: "Course Data Added Successfully",
            data: courseData
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}

export const addEmployeeData = async (req, res) => {
    try {

        const employeeData = req.body

        res.status(201).json({
            message: "Employee Data Added Successfully",
            data: employeeData
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}