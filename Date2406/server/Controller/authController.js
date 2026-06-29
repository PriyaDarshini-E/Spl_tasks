import empModel from "../Model/empModel.js"

export const empDepartment = async(req,res) => {
        try {
            const {departments} = req.body
            const empdept = await empModel.create({departments})
            res.status(200).json({msg:"Data stored",empdept})
        } catch (error) {
             res.status(200).json({msg:"Data not stored",error})
        }
}

export const getempdepartment =async(req,res)=>{
    try {
        const departments = await empModel.find()
        res.status(200).json({msg:"data is fetched",departments})
    } catch (error) {
        res.status(200).json({msg:"Data not fetched",error})
    }
}