import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String  },
    password:{type:String }
})

 export const userModel = mongoose.model("users" , userSchema);

