import express from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { userModel } from "../Models/User.js";

const router = express.Router();


// export const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//       jwt.verify(authHeader, "secret", (err) => {
//         if (err) {
//           return res.sendStatus(403);
//         }
//         next();
//       });
//     } else {
//       res.sendStatus(401);
//     }
//   };

router.post("/register" , async (req,res)=>{
    const {name , password} = req.body;

  

    const user = await userModel.findOne({name});
    if(user){
        return res.json({message:"user exist"})
         
    }
    const hashedPassword = await bcrypt.hash(password , 10);
    const newUser = new userModel({name, password:hashedPassword})
     await newUser.save()
    res.json({message : "user registered"});
})


router.post("/login" , async (req,res)=>{
    const {name , password} = req.body;

  

    const user = await userModel.findOne({name});
    if(!user){
        return res.json({message:"user  does not exist"})
         
    }

    const isPasswordValid = await bcrypt.compare(password , user.password);
    if(!isPasswordValid){
        return res.json({message :"username or password is incorrect"})
    }

    const token = jwt.sign({id:user._id }, "secret");
    res.json({token , userID:user._id})
})
export {router as userRouter};


