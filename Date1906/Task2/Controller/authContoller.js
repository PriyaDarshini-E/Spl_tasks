export const userLogin = (req,res)=>{
    try {
       const {email,password} = req.body

       if(email==="admin@gmail.com" && password==="12345" ){
            res.status(200).json({success:true, message:"Login Successful" })
       }
       
    } catch (error) {
        res.status(200).json({ success:false, message:"Invalid Credentials" })
    }
}

export const getbyid = (req,res) => {
    try {
        const userID = req.params.id
        res.status(200).json({ success:true, id:req.params.id, message:"User Found" })
    } catch (error) {
        res.status(400).json({ success:false,id:req.params.id, message:"User not Found" })
    }
}

export const getbyquery = (req,res) =>{
    try {
        const userName = req.query.name
        res.status(200).json({ success:true,message:"User Found"},userName)
    } catch (error) {
        res.status(400).json({ success:false, message:"User not Found" })
    }
}

export const createStudent = (req, res) => {
    const { name, course, city } = req.body;

    res.status(201).json({
        success: true,
        data: {name,course,city}
    });
};
