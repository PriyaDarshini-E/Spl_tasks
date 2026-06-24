export const registerUser = (req,res)=>{
   try {
    const {name,age} = req.body
    if(name==="Ravi"){
        return res.status(200).json({message: "Registration Successful"})
    }
   } catch (error) {
    res.status(400).json({msg:"Invalid User"})
   }
}
