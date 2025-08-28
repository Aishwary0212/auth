import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { response } from "express";

const registerUser=async (req,res)=>{
    // res.send("registered");

    const {name,email,password}=req.body
    if(!name || !email || !password){
        return res.status(400).json({
            message:"All fields are required"
        })
    }
    
    try{
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            })
        }
        const user=await User.create({
            name,
            email,
            password
        })
        console.log(user);
        

        if(!user ){
            return res.status(400).json({
                message:"User not registered"
            });
        }

        const token=crypto.randomBytes(32).toString("hex");
        console.log(token);
        user.verificationToken=token;
        await user.save()

        //send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.MAILTRAP_USERNAME,
              pass: process.env.MAILTRAP_PASSWORD,
            },
          });

          const mailOption={
            from:process.env.MAILTRAP_SENDEREMAIL, // sender address
            to: user.email, // list of receivers
            subject: "Hello ✔, please verify your email", // Subject line
            text: `pleae click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
          }
          await transporter.sendMail(mailOption);
          return res.status(201).json({
            message:"user registered successfully",
            success:true
          })

    }catch(error){
        res.status(400).json({
            message:"User not registered",
            error,
            success:false
        });

    }
};

const verifyUser=async (req,res)=>{
    //get token from url
    //validate token
    //find user based on token
    //if not
    // set isverified field to true
    //remove verification token
    //return response
    const {token}=req.params
    console.log(token)
    if(!token){
        return res.status(400).json({
            message:"invalid token"
        })
    }
    try {
      const user=await User.findOne({verificationToken:token})
      if(!user){
          return res.status(400).json({
              message:"invalid token"
          })
      }
      user.isVerified=true
      user.verificationToken=undefined
      user.resetPasswordToken=undefined
      await user.save()
      console.log("user verified");
      res.status(200).json({
        message:"User verified successfully",
      })
      
    } catch (error) {
      res.status(400).json({
        message:"User not verified",
        error,
      });
      
    }
    
}

const login=async (req,res)=>{
  //login user with email and password then add secure token in cookie

    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({
            message:"All fields are required",
        })
    }
    try {
        const user= await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"Invallid email or password",
            })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        console.log(isMatch);
        if(!isMatch){
            return res.status(400).json({
                message:"Invallid email or password",
            });

        }
        const token=jwt.sign(
            {id:user._id,role:user.role},
            process.env.JWT_SECRET,{
                expiresIn:"24h"
            }
        );

        console.log("=== Login Controller Debug ===");
        console.log("Token generated",token);

        // Set cookie with minimal options for testing 
        const cookieOptions={
            httpOnly:true,
            secure:true,
            maxAge:24*60*60*1000 //24 hrs
        }
        // Set cookie before sending response
        res.cookie("token",token,cookieOptions)

        res.status(200).json({
            success:"true",
            token:token,
            message:"Login successsful",
            user:{
                id:user._id,
                name:user.name,
                role:user.role
            }
        })        
    } catch (error) {
        return res.status(400).json({
            message:"User not loged in i.e. emaill/password invalid",
            error,
            success:false
        });
        
    }

}

const getMe=async (req,res)=>{
    try {
       const user=await User.findById(req.user.id).select("-password");
       if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found",            
        });
       }
       res.status(200).json({
        success:true,
        user
       })

        
    } catch (error) {
      console.error("Get profile error",error);
      res.status(500).json({
        success:false,
        message:"error fetching profile"
      })
        
    }
}

const logoutUser=async (req,res)=>{
    try {
        res.cookie("token","",{})
        res.status(200).json({
            success:true,
            message:"Logout out successfully"
           })
        
    } catch (error) {
        
    }
}


const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if email is provided
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User with this email does not exist",
        });
      }
  
      // Generate reset token and expiry
      const resetToken = crypto.randomBytes(32).toString("hex");
      const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
      user.resetPasswordToken = hashedToken;
      user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 minutes
      await user.save();
  
      // Email configuration
      const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD,
        },
      });
  
      const resetUrl = `${process.env.BASE_URL}/api/v1/users/reset-password/${resetToken}`;
  
      const message = `You requested a password reset. Click this link to reset your password: \n\n ${resetUrl}`;
  
      await transporter.sendMail({
        from: process.env.SENDEREMAIL,
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });
  
      res.status(200).json({
        success: true,
        message: "Password reset link sent to your email",
      });
    } catch (error) {
      console.error("Error in forgotPassword:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  };
const resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;
  
      if (!token || !newPassword) {
        return res.status(400).json({
          success: false,
          message: "Token and new password are required",
        });
      }
  
      // Hash the token to match it with the one stored in DB
      const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  
      // Find user with matching reset token and check expiry
      const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now()},
      });
  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired token",
        });
      }
  
      // Hash and update new password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
  
      // Clear the reset fields
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
  
      await user.save();
  
      return res.status(200).json({
        success: true,
        message: "Password reset successful",
      });
  
    } catch (error) {
      console.error("Error in resetPassword:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
};
export {
    registerUser,
    verifyUser,
    login,
    getMe,
    logoutUser,
    resetPassword,
    forgotPassword
}
