export const validateUser = (req, res, next) => {

    const { userid, username, email } = req.body

    if (!userid || !username || !email) {
        return res.status(400).json({
            success: false,
            message: "All User Fields Are Required"
        })
    }

    next()
}

export const validateCourse = (req, res, next) => {

    const { courseid, coursename, duration } = req.body

    if (!courseid || !coursename || !duration) {
        return res.status(400).json({
            success: false,
            message: "All Course Fields Are Required"
        })
    }

    next()
}

export const validateEmployee = (req, res, next) => {

    const { empid, empname, department } = req.body

    if (!empid || !empname || !department) {
        return res.status(400).json({
            success: false,
            message: "All Employee Fields Are Required"
        })
    }

    next()
}