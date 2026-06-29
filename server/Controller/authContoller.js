import empModel from "../Model/empModel.js";

export const departments = async(req,res) => {
    try {
      const {departments } = req.body
      const empdept = await empModel.create({departments})

        res.status(200).json({success:true,msg:"data stored",empdept})
    } catch (error) {
        res.status(400).json({msg:"data not stored",error})
    }
}
export const getdata =async(req,res)=>{
    try {
       const empdept = await empModel.find();
        res.status(200).json({success:true,msg:"data fetched",empdept})
    } catch (error) {
        res.status(400).json({msg:"data not fetched"})
    }
}