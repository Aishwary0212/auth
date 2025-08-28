import jwt from "jsonwebtoken";



export const isLoggedIn=async (req,res,next)=>{
    try {
        console.log(req.cookies); 
        let token=req.cookies?.token
        console.log("token found : ",token?"Yes":"NO");

        if(!token){
            console.log("NO token");
            return res.status(401).json({
                success:false,
                message:"authenticaton failed"
            });
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        console.log("decoded data : ",decoded);
        req.user=decoded;

        next();



    } catch (error) {

        console.log("Error in middle ware",error);
        return res.status(401).json({
            success:false,
            message:"Internal server error"
        })
    }
}